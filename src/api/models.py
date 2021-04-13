from flask_sqlalchemy import SQLAlchemy
from flask import Flask

db = SQLAlchemy()

class Propiedad(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    calle = db.Column(db.String(120), unique=False, nullable=False)
    numero = db.Column(db.Integer, unique=False, nullable=False)
    ciudad = db.Column(db.String(120), unique=False, nullable=False)
    codigo_postal = db.Column(db.Integer, unique=False, nullable=False)
    comunidad = db.Column(db.String(120), unique=False, nullable=False)
    dormitorios = db.Column(db.Integer, unique=False, nullable=False)
    huespedes = db.Column(db.Integer, unique=False, nullable=False)
    camas = db.Column(db.Integer, unique=False, nullable=False)
    bathrooms = db.Column(db.Boolean(), unique=False, nullable=False)
    descripcion = db.Column(db.String, unique=False, nullable=False)

    @classmethod
    def create_propiedad(cls, calle, numero, ciudad, codigo_postal, comunidad, dormitorios, huespedes, camas, bathrooms, descripcion):
        propiedad = cls()
        propiedad.calle = calle
        propiedad.numero = numero
        propiedad.ciudad = ciudad
        propiedad.codigo_postal = codigo_postal
        propiedad.comunidad = comunidad
        propiedad.dormitorios = dormitorios
        propiedad.huespedes = huespedes
        propiedad.camas = camas
        propiedad.bathrooms = bathrooms
        propiedad.descripcion = descripcion
        

        db.session.add(propiedad)
        db.session.commit()
        
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), unique=False, nullable=False)
    lastname = db.Column(db.String(120), unique=False, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)
    token = db.Column(db.String(254), unique=True, nullable=True)

    @classmethod
    def create_user(cls, name, lastname, email, password):
        user = cls()
        user.name = name
        user.lastname = lastname
        user.email = email
        user.password = password
        user.is_active = True
        user.token = ""

        db.session.add(user)
        db.session.commit()

    @classmethod
    def get_with_login_credentials(cls, email, password):
        return cls.query.filter_by(email=email).filter_by(password=password).one_or_none()
    
    @classmethod
    def get(cls, id):
        return cls.query.get(id)

    def __repr__(self):
        return '<User %r>' % self.username

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "lastname": self.lastname,
            "email": self.email
            # do not serialize the password, its a security breach
        }
   