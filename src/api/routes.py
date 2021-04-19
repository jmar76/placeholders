"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Propiedad, Amenidades
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token
from flask_jwt_extended import jwt_required
from flask_jwt_extended import get_jwt_identity
import random
from werkzeug.security import generate_password_hash, check_password_hash

api = Blueprint('api', __name__)

@api.route('/signup', methods=['POST'])
def signup():
    body = request.get_json()
    password = body["password"]
    hashed = generate_password_hash(password, "sha256")

    User.create_user(body["name"], body["lastname"],
                        body["email"], hashed)
        
    return jsonify({}), 200

@api.route("/login", methods=["POST"])
def login():
    body = request.get_json()
    email = body["email"]
    password = body["password"]
    user = User.get_with_email(email)
    
    if user is None:
        raise APIException("Datos incorrectos")
    if check_password_hash(user.password, password):
        access_token = create_access_token(identity = user.id)
        return jsonify({"access_token": access_token})
    else:
        raise APIException("Datos incorrectos")
    
@api.route("/profile", methods=['GET'])
@jwt_required()
def profile():
    current_user_id = get_jwt_identity()
    user = User.get(current_user_id)
    print(user)
    return jsonify(user.serialize())

@api.route("/upload-images", methods=["POST"])
def upload_images():
    files = request.files
    print(files)
    # for key in files:
    #     file = files[key]
        
    #     user_id = 10
    #     try:
    #         new_filename ="{}-{}".format(user_id, file.filename)
    #         url_image = upload_file_to_s3(file, os.environ.get('S3_BUCKET_NAME'))
    #     except Exception as e:
    #         raise APIException(e)

    return jsonify("has subido las fotos"), 200
    
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

    user = User.get_for_forgot(email, token)
    user.password = password 
    user.token = None
    db.session.commit()

    return jsonify({}), 200

@api.route('/propiedades', methods=['POST'])
@jwt_required()
def propiedades():
    body = request.get_json()
    user_id = get_jwt_identity()    
    print(body)
    propiedad_id = Propiedad.create_propiedad(user_id, body["calle"], body["numero"],
                                body["ciudad"], body["codigo_postal"],
                                body["provincia"], body["dormitorios"],
                                body["huespedes"], body["camas"],
                                body["bathrooms"], body["descripcion"])
    print(propiedad_id)
    Amenidades.create_amenidades(propiedad_id, body["piscina"], body["cocina"],
                                body["parking"], body["wifi"],
                                body["tv"], body["aire_acondicionado"],
                                body["calefaccion"], body["chimenea"],
                                body["agua_caliente"], body["zona_trabajo"])

    return jsonify("se subio la informacion"), 200

@api.route('/localidades', methods=['POST'])
def localidades():
    body = request.get_json()
    print(body)

    return jsonify("se subio la informacion"), 200

@api.route('/provincias', methods=['POST'])
def provincias():
    body = request.get_json()
    print(body)

    try:
        Provincias.create_provincias(body["comunidad"])
    except Exception as err:
        print(err)

    # except:
    #     raise APIException("Error")

    return jsonify("se subio la informacion"), 200
@api.route('/localidad', methods=['POST'])
def localidad():
    body = request.get_json()
    print(body)
    # except:
    #     raise APIException("Error")

    return jsonify("se subio la informacion"), 200
