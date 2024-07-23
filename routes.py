from flask import jsonify, request
from app import app, db
from models import User

def init_routes(app):
    @app.route('/')
    def index():
        return jsonify({"message": "Welcome to the Flask API!"})

    @app.route('/users', methods=['GET'])
    def get_users():
        users = User.query.all()
        return jsonify([user.username for user in users])

    @app.route('/users', methods=['POST'])
    def create_user():
        data = request.get_json()
        user = User(username=data['username'], email=data['email'])
        db.session.add(user)
        db.session.commit()
        return jsonify({"message": "User created successfully!"}), 201

