"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token
from flask_jwt_extended import jwt_required
from flask_jwt_extended import get_jwt_identity
import random

api = Blueprint('api', __name__)

@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend"
    }

@api.route('/signup', methods=['POST'])
def signup():
    body = request.get_json()

    try:
        User.create_user(body ["name"], body ["lastname"], body ["email"], body ["password"])
    except:
        raise APIException("Error al introducir los datos, pruebe de nuevo!")
        
    return jsonify({}), 200

@api.route("/login", methods=["POST"])
def login():
    body = request.get_json()
    email = body["email"]
    password = body ["password"]

    user = User.get_with_login_credentials(email, password)

    if user is None:
        raise APIException("Datos incorrectos")
   
    access_token = create_access_token(identity=user.id)
    return jsonify({"access_token": access_token})

@api.route("/profile", methods=['GET'])
@jwt_required()
def profile():
    current_user_id = get_jwt_identity()
    user = User.get(current_user_id)
    return jsonify(user.serialize())
    
@api.route("/forgot", methods=['POST'])
 
def forgot():
 request_json = request.get_json()
 
email=request_json ["email"]

if email is None:
    raise APIException("Correo Electronico Requerido")

n = random.randint(100000000, 122939393939)
print(n)

user = User.get_with_email(email)
user.token = token

db.session.commit()

forgot_password_email = ForgotPasswordEmail(email, token)
forgot_password_email.send()

return jsonify({}), 200

@api.route('/reset-password' , methods=['POST'])
def forgot_password ():
request_json = request.get_json()

email = request_json["email"]
token = request_json["token"]

user=User.get_for_forgot(email, token)
user.password = password 
user.token = None
db.session.commit()

return jsonify({}), 200