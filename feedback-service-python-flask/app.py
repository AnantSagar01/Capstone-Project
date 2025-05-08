from flask import Flask, request, jsonify
import sqlite3
import py_eureka_client.eureka_client as eureka_client

app = Flask(__name__)

def get_db_connection():
    conn = sqlite3.connect('feedback.db')
    conn.row_factory = sqlite3.Row
    return conn

@app.route('/feedback', methods=['POST'])
def submit_feedback():
    data = request.get_json()
    user = data.get('user')
    comment = data.get('comment')

    if not user or not comment:
        return jsonify({'error': 'User and comment are required'}), 400

    conn = get_db_connection()
    conn.execute('INSERT INTO feedback (user, comment) VALUES (?, ?)', (user, comment))
    conn.commit()
    conn.close()

    return jsonify({'message': 'Feedback submitted successfully'}), 201

@app.route('/feedback', methods=['GET'])
def get_feedback():
    conn = get_db_connection()
    feedback = conn.execute('SELECT * FROM feedback').fetchall()
    conn.close()

    feedback_list = [dict(row) for row in feedback]
    return jsonify(feedback_list)

if __name__ == '__main__':
    eureka_client.init(eureka_server="http://localhost:8761/eureka",app_name="feedback-service",instance_ip="10.170.218.212",instance_port=7004)
    app.run(debug=True,host="0.0.0.0",port=7004)
