"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
import os
import click
import datetime
from flask import Flask, request, jsonify, url_for, send_from_directory
from flask_migrate import Migrate
from flask_swagger import swagger
from flask_cors import CORS
from api.utils import APIException, generate_sitemap
from api.models import db
from api.routes import api
from api.admin import setup_admin
from api.models import Amenidades, Provincias, Localidades
from datetime import timedelta
from flask_jwt_extended import get_jwt
from flask_jwt_extended import create_access_token
from flask_jwt_extended import set_access_cookies

from flask_jwt_extended import JWTManager
#from models import Person

ENV = os.getenv("FLASK_ENV")
static_file_dir = os.path.join(os.path.dirname(os.path.realpath(__file__)), '../public/')
app = Flask(__name__)
app.url_map.strict_slashes = False

# Setup the Flask-JWT-Extended extension
app.config["JWT_SECRET_KEY"] = "bvhshdbvhb36fbfdgndfdhbvhhv5d4bv5ef4v5fbvdf5@"  # Change this!
app.config["JWT_ACCESS_TOKEN_EXPIRES"] = datetime.timedelta(hours = 3)

jwt = JWTManager(app)

# database condiguration

if os.environ.get("DATABASE_URL") is not None:
    app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get('DATABASE_URL').replace("postgres://", "postgresql://", 1)
else:
    app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:////tmp/test.db"

  
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
MIGRATE = Migrate(app, db)
db.init_app(app)

# Allow CORS requests to this API
CORS(app)

# add the admin
setup_admin(app)

# Add all endpoints form the API with a "api" prefix
app.register_blueprint(api, url_prefix='/api')

# Handle/serialize errors like a JSON object
@app.errorhandler(APIException)
def handle_invalid_usage(error):
    return jsonify(error.to_dict()), error.status_code

# generate sitemap with all your endpoints
@app.route('/')
def sitemap():
    if ENV == "development":
        return generate_sitemap(app)
    return send_from_directory(static_file_dir, 'index.html')

# any other endpoint will try to serve it like a static file
@app.route('/<path:path>', methods=['GET'])
def serve_any_other_file(path):
    if not os.path.isfile(os.path.join(static_file_dir, path)):
        path = 'index.html'
    response = send_from_directory(static_file_dir, path)
    response.cache_control.max_age = 0 # avoid cache memory
    return response

# this only runs if `$ python src/main.py` is executed
if __name__ == '__main__':
    PORT = int(os.environ.get('PORT', 3001))
    app.run(host='0.0.0.0', port=PORT, debug=True)

@app.cli.command("populate-database")
def populate_database():
    amenities = ["cocina","calefaccion","piscina","parking","wifi","tv","aire_acondicionado","chimenea","mascotas","zona_trabajo"]
    for amenidad in amenities:
        new_amenity = Amenidades()
        new_amenity.amenity = amenidad
        db.session.add(new_amenity)
        db.session.commit()
    provincias = ["Almeria","Cadiz","Cordoba","Granada","Jaen","Huelva","Malaga","Sevilla"]
    for provincia in provincias:
        new_provincia = Provincias()
        new_provincia.provincia = provincia
        db.session.add(new_provincia)
        db.session.commit()

    localidades_almeria = ["Abrucena","Agua Amarga","Berja","Las Negras","Lucainena de las Torres","Mojacar","Rodalquilar","Velez-Blanco"]
    localidades_cadiz = ["Arcos de la Frontera","Castellar de la Frontera","Chipiona","Grazalema","Medina-Sidonia","Olvera","Sanlucar de Barrameda","Vejer de la Frontera"]
    localidades_cordoba = ["Almodovar del Rio","Baena","Espejo","Iznajar","Luque","Priego de Córdoba","Zuheros"]
    localidades_granada = ["Albañuelas","Castril","Guadix","Montefrio","Nigüelas","Nivar","Pampaneira","Salobreña","Trevelez"]
    localidades_jaen = ["Alcala la Real","Alcaudete","Baeza","Baños de la Encima","Cazorla","Hornos","La Iruela","Ubeda"]
    localidades_huelva = ["Alajar","Almonaster La Real","Ayamonte","Aracena","El Rocio-Almonte","El Rompido","Jagubo","Moguer","Palos de Frontera"]
    localidades_malaga = ["Antequera","Archidona","Casares","Frigiliana","Marbella","Mijas","Nerja","Ojen","Ronda"]
    localidades_sevilla = ["Aznalcazar","Carmona","Cazalla de la Sierra","Constatina","Ecija","Estepa","Lebrija","Marchena","Osuna","Sanlucar La Mayor","Santiponce","Utrera"]

    for localidad in localidades_almeria:
        almeria = Provincias.get("Almeria")
        new_localidad = Localidades()
        new_localidad.localidad = localidad
        new_localidad.provincia_id = almeria.id
        db.session.add(new_localidad)
        db.session.commit()

    for localidad in localidades_cadiz:
        cadiz = Provincias.get("Cadiz")
        new_localidad = Localidades()
        new_localidad.localidad = localidad
        new_localidad.provincia_id = cadiz.id
        db.session.add(new_localidad)
        db.session.commit()

    for localidad in localidades_cordoba:
        cordoba = Provincias.get("Cordoba")
        new_localidad = Localidades()
        new_localidad.localidad = localidad
        new_localidad.provincia_id = cordoba.id
        db.session.add(new_localidad)
        db.session.commit()

    for localidad in localidades_granada:
        granada = Provincias.get("Granada")
        new_localidad = Localidades()
        new_localidad.localidad = localidad
        new_localidad.provincia_id = granada.id
        db.session.add(new_localidad)
        db.session.commit()
    
    for localidad in localidades_jaen:
        jaen = Provincias.get("Jaen")
        new_localidad = Localidades()
        new_localidad.localidad = localidad
        new_localidad.provincia_id = jaen.id
        db.session.add(new_localidad)
        db.session.commit()

    for localidad in localidades_huelva:
        huelva = Provincias.get("Huelva")
        new_localidad = Localidades()
        new_localidad.localidad = localidad
        new_localidad.provincia_id = huelva.id
        db.session.add(new_localidad)
        db.session.commit()
    
    for localidad in localidades_malaga:
        malaga = Provincias.get("Malaga")
        new_localidad = Localidades()
        new_localidad.localidad = localidad
        new_localidad.provincia_id = malaga.id
        db.session.add(new_localidad)
        db.session.commit()

    for localidad in localidades_sevilla:
        sevilla = Provincias.get("Sevilla")
        new_localidad = Localidades()
        new_localidad.localidad = localidad
        new_localidad.provincia_id = sevilla.id
        db.session.add(new_localidad)
        db.session.commit()
