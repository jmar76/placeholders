"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Propiedad, Amenidades, Provincias, Localidades
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token
from flask_jwt_extended import jwt_required
from flask_jwt_extended import get_jwt_identity
import random
import bcrypt

api = Blueprint('api', __name__)

@api.route('/signup', methods=['POST'])
def signup():
    body = request.get_json()
    password = body["password"]
    test = password.encode('utf-8')
    hashed = bcrypt.hashpw(test, bcrypt.gensalt())

    User.create_user(body["name"], body["lastname"],
                        body["email"], hashed)
        
    return jsonify({}), 200


@api.route("/login", methods=["POST"])
def login():
    body = request.get_json()
    email = body["email"]
    password = body["password"]
    
    user = User.get_with_email(email)
    hashed = user.password

    if user is None:
        raise APIException("Datos incorrectos")
    
    if bcrypt.checkpw(password, hashed):
        access_token = create_access_token(identity=user.id)
        return jsonify({"access_token": access_token})
    else: 
        raise APIException("Datos incorrectos")

@api.route("/login", methods=["PUT"])
def return_access_token():
    body = request.get_json()
    email = body["email"]
    
    user = User.get_with_email(email)
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

    user=User.get_for_forgot(email, token)
    user.password = password 
    user.token = None
    db.session.commit()

    return jsonify({}), 200

@api.route('/propiedades', methods=['POST'])
@jwt_required()
def propiedades():
    body = request.get_json()
    print(body)

    user_id = get_jwt_identity()
    

    Propiedad.create_propiedad(user_id, body["calle"], body["numero"],
                                body["ciudad"], body["codigo_postal"],
                                body["comunidad"], body["dormitorios"],
                                body["huespedes"], body["camas"],
                                body["bathrooms"], body["descripcion"])

    return jsonify("se subio la informacion"), 200

@api.route('/amenidades', methods=['POST'])
def amenidades():
    body = request.get_json()
    print(body)

    try:
        Amenidades.create_amenidades(body["piscina"], body["cocina"],
                                    body["parking"], body["wifi"],
                                    body["tv"], body["aire_acondicionado"],
                                    body["calefaccion"], body["chimenea"],
                                    body["agua_caliente"], body["zona_trabajo"])
    except Exception as err:
        print(err)

    # except:
    #     raise APIException("Error")

    return jsonify("se subio la informacion"), 200

@api.route('/provincias', methods=['POST'])
def provincias():
    body = request.get_json()
    print(body)

    try:
        Provincias.create_provincias(body["almeria"], body["cadiz"],
                                    body["cordoba"], body["granada"],
                                    body["huelva"], body["jaen"],
                                    body["malaga"], body["sevilla"])
                                    
    except Exception as err:
        print(err)

    # except:
    #     raise APIException("Error")

    return jsonify("se subio la informacion"), 200

@api.route('/localidades', methods=['POST'])
def localidades():
    body = request.get_json()
    print(body)

    try:
        Localidades.create_provincias(body["abrucena"], body["agua_amarga"], body["berja"], body["las_negras"],body["lucainena_de_las_torres"], body["mojacar"],   body["malaga"], body["sevilla"], body["rodalquilar"], body["velez_blanco"],
        body["arcos_de_la_frontera"], body["castellar_de_la_frontera"],body["chipiona"], body["grazalema"],   body["medina_sidonia"], body["olvera"],body["sanlucar_de_barrameda"], body["vejer_de_la_frontera"],
        body["almodovar_del_rio"], body["baena"], body["espejo"], body["iznajar"],body["luque"], body["priego_de_cordoba"], body["zuheros"],
        body["albañuelas"], body["castril"], body["guadix"], body["montefrio"], body["nigüelas"], body["nivar"], body["pampaneira"], body["salobreña"], body["trevelez"], 
        body["alcala_la_real"], body["alcaudete"],body["baeza"], body["baños_de_la_encima"], body["cazorla"], body["hornos"],body["la_iruela"], body["ubeda"],
        body["alajar"], body["almonaster_la_real"],body["ayamonte"], body["aracena"], body["el_rocio_almonte"], body["el_rompido"],body["jagubo"], body["moguer"],body["palos_de_frontera"],
        body["antequera"],body["archidona"],body["casares"],body["frigiliana"],body["marbella"],body["mijas"],body["nerja"],body["ojen"],body["ronda"],
        body["aznalcazar"],body["carmona"],body["cazalla_de_la_sierra"],body["constatina"],body["ecija"],body["estepa"],body["lebrija"],body["marchena"], body["osuna"],body["sanlucar_la_mayor"],body["santiponce"],body["utrera"])                            
                                 
                                    
    except Exception as err:
        print(err)

    # except:
    #     raise APIException("Error")

    return jsonify("se subio la informacion"), 200
