# from flask import Flask, request, jsonify
# import sqlite3
# import py_eureka_client.eureka_client as eureka_client

# app = Flask(__name__)

# def get_db_connection():
#     conn = sqlite3.connect('feedback.db')
#     conn.row_factory = sqlite3.Row
#     return conn

# @app.route('/feedback', methods=['POST'])
# def submit_feedback():
#     data = request.get_json()
#     user = data.get('user')
#     comment = data.get('comment')

#     if not user or not comment:
#         return jsonify({'error': 'User and comment are required'}), 400

#     conn = get_db_connection()
#     conn.execute('INSERT INTO feedback (user, comment) VALUES (?, ?)', (user, comment))
#     conn.commit()
#     conn.close()

#     return jsonify({'message': 'Feedback submitted successfully'}), 201

# @app.route('/feedback', methods=['GET'])
# def get_feedback():
#     conn = get_db_connection()
#     feedback = conn.execute('SELECT * FROM feedback').fetchall()
#     conn.close()

#     feedback_list = [dict(row) for row in feedback]
#     return jsonify(feedback_list)

# if __name__ == '__main__':
#     eureka_client.init(eureka_server="http://localhost:8761/eureka",app_name="feedback-service",instance_ip="10.170.218.212",instance_port=7004)
#     app.run(debug=True,host="0.0.0.0",port=7004)




from flask import Flask, request
from flask_cors import CORS
from extensions import db, jwt
from auth import auth_bp
from flask_restx import Api
from routes import api as feedback_ns
#from logging_config import setup_logging  # <-- added
import logging
def create_app():
   #setup_logging()  # <-- set up logging
   app = Flask(__name__)
   CORS(app)
   app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///feedback.db'
   app.config['JWT_SECRET_KEY'] = 'your-secret-key'
   db.init_app(app)
   jwt.init_app(app)
   app.register_blueprint(auth_bp)
   api = Api(app, title='Cosmetics Feedback API', version='1.0', description='APIs for Feedback Microservice')
   api.add_namespace(feedback_ns, path='/feedback')
   # Log each request (optional but useful)
   @app.before_request
   def log_request_info():
       logging.info(f"{request.method} {request.path} - {request.remote_addr}")
   return app
@app.route('/feedback', methods=['POST'])
def submit_feedback():
    data = request.get_json()
    user = data.get('user')
    comment = data.get('comment')
    
@app.route('/feedback', methods=['GET'])
def get_feedback():
    conn = get_db_connection()
    feedback = conn.execute('SELECT * FROM feedback').fetchall()
    conn.close()



app = create_app()
if __name__ == '__main__':
        #eureka_client.init(eureka_server="http://localhost:8761/eureka",app_name="feedback-service",instance_ip="10.170.218.212",instance_port=7004)
        #app.run(debug=True,host="0.0.0.0",port=7004)
    app.run(debug=True)