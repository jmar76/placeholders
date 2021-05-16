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
from api.models import Amenidades, Provincias
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
def create_amenities():
    amenities = ["cocina","calefaccion","piscina","parking","wifi","tv","aire_acondicionado","chimenea","mascotas","zona_trabajo"]
    for amenidad in amenities:
        new_amenity = Amenidades()
        new_amenity.amenity = amenidad
        db.session.add(new_amenity)
        db.session.commit()
def create_provincias():
    provincias = ["Almeria","Cadiz","Cordoba","Granada","Jaen","Huelva","Malaga","Sevilla"]
    for provincia in provincias:
        new_provincia = Provincias()
        new_provincia.provincia = provincia
        db.session.add(new_provincia)
        db.session.commit()