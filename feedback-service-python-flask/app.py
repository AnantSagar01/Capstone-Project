from flask import Flask, request, jsonify, send_file
import sqlite3
import csv
import os
from flask_cors import CORS
from py_eureka_client import eureka_client


app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

def init_db():
    conn = sqlite3.connect('shopeasy.db')
    cursor = conn.cursor()

    cursor.execute('''
        CREATE TABLE IF NOT EXISTS feedback (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            product_id INTEGER NOT NULL,
            user_name TEXT NOT NULL,
            review TEXT NOT NULL,
            rating INTEGER NOT NULL
        )
    ''')

    conn.commit()
    conn.close()

def generate_csv():
    conn = sqlite3.connect('shopeasy.db')
    cursor = conn.cursor()
    cursor.execute('SELECT * FROM feedback')
    feedbacks = cursor.fetchall()
    conn.close()

    with open('feedback.csv', 'w', newline='') as csvfile:
        fieldnames = ['id', 'product_id', 'user_name', 'review', 'rating']
        writer = csv.DictWriter(csvfile, fieldnames=fieldnames)

        writer.writeheader()
        for row in feedbacks:
            writer.writerow({
                'id': row[0],
                'product_id': row[1],
                'user_name': row[2],
                'review': row[3],
                'rating': row[4]
            })

init_db()
generate_csv()  # Initial CSV generation

@app.route('/api/feedback', methods=['POST'])
def submit_feedback():
    data = request.json
    product_id = data.get('product_id')
    user_name = data.get('user_name')
    review = data.get('review')
    rating = data.get('rating')

    if not product_id or not user_name or not review or not rating:
        return jsonify({'error': 'Missing data'}), 400

    conn = sqlite3.connect('shopeasy.db')
    cursor = conn.cursor()
    cursor.execute('''
        INSERT INTO feedback (product_id, user_name, review, rating)
        VALUES (?, ?, ?, ?)
    ''', (product_id, user_name, review, rating))
    conn.commit()
    conn.close()

    generate_csv()  # Regenerate CSV after feedback submission

    return jsonify({'message': 'Feedback submitted successfully'}), 201

@app.route('/api/feedback/<int:product_id>', methods=['GET'])
def get_feedback(product_id):
    conn = sqlite3.connect('shopeasy.db')
    cursor = conn.cursor()
    cursor.execute('SELECT * FROM feedback WHERE product_id = ?', (product_id,))
    feedbacks = cursor.fetchall()
    conn.close()

    feedback_list = [
        {
            'id': row[0],
            'product_id': row[1],
            'user_name': row[2],
            'review': row[3],
            'rating': row[4]
        }
        for row in feedbacks
    ]

    return jsonify(feedback_list), 200

@app.route('/api/all-feedback', methods=['GET'])
def get_all_feedback():
    conn = sqlite3.connect('shopeasy.db')
    cursor = conn.cursor()
    cursor.execute('SELECT * FROM feedback')
    feedbacks = cursor.fetchall()
    conn.close()

    feedback_list = [
        {
            'id': row[0],
            'product_id': row[1],
            'user_name': row[2],
            'review': row[3],
            'rating': row[4]
        }
        for row in feedbacks
    ]

    generate_csv()  # Regenerate CSV when retrieving all feedback

    return jsonify(feedback_list), 200

@app.route('/api/feedback-csv', methods=['GET'])
def download_csv():
    file_path = 'feedback.csv'
    if os.path.exists(file_path):
        return send_file(file_path, as_attachment=True)
    else:
        return jsonify({'error': 'CSV file not found'}), 404

if __name__ == '__main__':  
    eureka_client.init(eureka_server="http://localhost:8761/eureka",app_name="feedback-service",instance_ip="10.85.88.37",instance_port=8000)
    app.run(debug=True,host="0.0.0.0",port=8000)