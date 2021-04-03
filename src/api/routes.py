"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token
from flask_jwt_extended import jwt_required

api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend"
    }

@api.route('/signup', methods=['POST'])
def signup():
    body = request.get_json()
    User.create_user(body ["email"], body ["password"])
    return jsonify({}), 200

@api.route("/login", methods=["POST"])
def login():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    person = User.query.filter_by(email=email, password=password).first()
    # if person == None:  
    #     return jsonify({"msg": "Bad email or password"}), 401
    # print(person)

    access_token = create_access_token(identity=email)
    return jsonify(access_token=access_token)