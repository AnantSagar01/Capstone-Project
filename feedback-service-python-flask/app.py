from flask import Flask, request, jsonify, send_file
import sqlite3
import csv
from flasgger import Swagger
import os
from flask_cors import CORS
import py_eureka_client.eureka_client as eureka_client

app = Flask(__name__)
CORS(app)
Swagger(app)

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

@app.route('/info', methods=['GET'])
def info():
    return jsonify({
        "Name":"feedback-service",
        "Version":"0.0.0.1",
        "Description":"Feedback for the ordered items"
    })
 
@app.route('/health', methods=['GET'])
def health():
    return jsonify({
        "Status":"UP"
    })

@app.route('/api/feedback', methods=['POST'])
def submit_feedback():
    """
    Add a new feedback
    ---
    parameters:
          - in: body
            name: body
            required: true
            # schema:
            #   $ref: 'https://api.swaggerhub.com/domains/smartbear-public/ProblemDetails/1.0.0#/components/schemas/init_db'
    responses:
        201:
            description: Feedback submitted successfully
        400:
            description: Bad request (invalid input)
    """
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
    eureka_client.init(eureka_server="http://localhost:8761/eureka",app_name="feedback-service",instance_ip="10.170.218.212",instance_port=7004)
    app.run(debug=True,host="0.0.0.0",port=7004)
     


# from flask import Flask, request, jsonify
# from flask_sqlalchemy import SQLAlchemy
# from flasgger import Swagger
# import py_eureka_client.eureka_client as eureka_client
# import os
 
# app = Flask(__name__)
# Swagger(app)
# # Configure SQLite database
# basedir = os.path.abspath(os.path.dirname(__file__))
# app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + os.path.join(basedir, 'feedback.db')
# app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
 
# db = SQLAlchemy(app)
 
# class Feedback(db.Model):
#     id = db.Column(db.Integer, primary_key=True)
#     customer_id = db.Column(db.Integer, nullable=False)
#     product_id = db.Column(db.Integer, nullable=False)
#     rating = db.Column(db.Integer, nullable=False)
#     comments = db.Column(db.Text, nullable=True)
#     created_at = db.Column(db.DateTime, default=db.func.current_timestamp())
 
# # Create the database tables
# with app.app_context():
#     db.create_all()
 
# @app.route('/feedback', methods=['POST'])
# def submit_feedback():
#     """
#     Add a new feedback
#     ---
#     parameters:
#           - in: body
#             name: body
#             required: true
#             # schema:
#             #   $ref: 'https://api.swaggerhub.com/domains/smartbear-public/ProblemDetails/1.0.0#/components/schemas/Feedback'
#     responses:
#         201:
#             description: Feedback submitted successfully
#         400:
#             description: Bad request (invalid input)
#     """
#     data = request.json
#     if not data or 'customer_id' not in data or 'product_id' not in data or 'rating' not in data:
#         return jsonify({"error": "Invalid input"}), 400
   
#     feedback = Feedback(
#         customer_id=data.get('customer_id'),
#         product_id=data.get('product_id'),
#         rating=data.get('rating'),
#         comments=data.get('comments', '')
#     )
#     db.session.add(feedback)
#     db.session.commit()
#     return jsonify({"message": "Feedback submitted successfully"}), 201
 
# @app.route('/feedback', methods=['GET'])
# def get_feedback():
#     """
#     Get feedback for a specific product
#     ---
#     parameters:
#         - in: query
#           name: product_id
#           required: true
#           schema:
#               type: integer
#               description: ID of the product
#     responses:
#         200:
#             description: List of feedbacks for the specified product
#         404:
#             description: Product not found
#     """
#     product_id = request.args.get('product_id')
#     if not product_id:
#         return jsonify({"error": "Product ID is required"}), 400
   
#     feedbacks = Feedback.query.filter_by(product_id=product_id).all()
#     if not feedbacks:
#         return jsonify({"error": "No feedback found for this product"}), 404
   
#     return jsonify([{
#         'id': f.id,
#         'customer_id': f.customer_id,
#         'product_id': f.product_id,
#         'rating': f"{f.rating}/5",
#         'comments': f.comments,
#         'created_at': f.created_at.isoformat()
#     } for f in feedbacks]), 200
 
 
# if __name__ == "__main__":
# eureka_client.init(eureka_server="http://localhost:8761/eureka",app_name="feedback-service",instance_ip="10.170.218.212",instance_port=7004)
# app.run(debug=True,host="0.0.0.0",port=7004)