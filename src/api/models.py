from flask_sqlalchemy import SQLAlchemy
from flask import Flask
import json

db = SQLAlchemy()

association_table = db.Table('association',
                             db.Column('propiedad_id', db.Integer,
                                       db.ForeignKey('propiedad.id')),
                             db.Column('amenidades_id', db.Integer,
                                       db.ForeignKey('amenidades.id'))
                             )


class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), unique=False, nullable=False)
    lastname = db.Column(db.String(120), unique=False, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(256), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)
    token = db.Column(db.String(254), unique=True, nullable=True)
    propiedades = db.relationship('Propiedad', back_populates="user")

    @classmethod
    def create_user(cls, name, lastname, email, hashed):
        user = cls()
        user.name = name
        user.lastname = lastname
        user.email = email
        user.password = hashed
        user.is_active = True

        db.session.add(user)
        db.session.commit()

    @classmethod
    def get_with_email(cls, email):
        return cls.query.filter_by(email=email).one_or_none()

    @classmethod
    def get(cls, id):
        return cls.query.get(id)

    def __repr__(self):
        return self.email

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "lastname": self.lastname,
            "email": self.email
            # do not serialize the password, its a security breach
        }


class Propiedad(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    provincia_id = db.Column(db.Integer, db.ForeignKey('provincias.id'))
    localidad_id = db.Column(db.Integer, db.ForeignKey('localidades.id'))
    user = db.relationship("User", back_populates="propiedades")
    titulo = db.Column(db.String(120), unique=False, nullable=False)
    calle = db.Column(db.String(120), unique=False, nullable=False)
    numero = db.Column(db.String(120), unique=False, nullable=False)
    codigo_postal = db.Column(db.String(120), unique=False, nullable=False)
    dormitorios = db.Column(db.String(120), unique=False, nullable=False)
    camas = db.Column(db.String(120), unique=False, nullable=False)
    huespedes = db.Column(db.Integer(), unique=False, nullable=False)
    bathrooms = db.Column(db.String(120), unique=False, nullable=False)
    precio = db.Column(db.Integer(), unique=False, nullable=False)
    descripcion = db.Column(db.String(1200), unique=False, nullable=False)
    amenidades = db.relationship(
        'Amenidades', secondary=association_table, back_populates="propiedades")

    @classmethod
    def create_propiedad(cls, user_id, titulo, calle, numero, codigo_postal, dormitorios, huespedes, camas, bathrooms, precio, descripcion):
        propiedad = cls()
        propiedad.user_id = user_id
        propiedad.titulo = titulo
        propiedad.calle = calle
        propiedad.numero = numero
        propiedad.codigo_postal = codigo_postal
        propiedad.dormitorios = dormitorios
        propiedad.huespedes = huespedes
        propiedad.camas = camas
        propiedad.bathrooms = bathrooms
        propiedad.precio = precio
        propiedad.descripcion = descripcion

        user = User.get(user_id)
        user.propiedades.append(propiedad)

        db.session.add(propiedad)
        db.session.commit()

        return propiedad.id

    @classmethod
    def get(cls, id):
        return cls.query.get(id)

    def __str__(self):
        return str(self.id)

    @classmethod
    def getByLocation(cls, ciudad, huespedes):
        if huespedes == "":
            huespedes = 0
        ciudad = Localidades.get(ciudad)
        return cls.query.filter_by(localidad = ciudad).filter(cls.huespedes >= huespedes).all()
        return cls.query.filter_by(ciudad = ciudad).filter(cls.huespedes >= huespedes).all()
        return cls.query.filter_by(ciudad=ciudad).filter(cls.huespedes >= huespedes).all()

    def serialize(self):
        amenidades = []
        for amenidad in self.amenidades:
            amenidades.append(str(amenidad))
        provincia = str(Provincias.get_by_id(self.provincia_id))
        ciudad = str(Localidades.get_by_id(self.localidad_id))
        return {
            "titulo": self.titulo,
            "huespedes": self.huespedes,
            "dormitorios" : self.dormitorios,
            "bathrooms" : self.bathrooms,
            "precio" : self.precio,
            "ciudad" : ciudad,
            "provincia" : provincia,
            "dormitorios": self.dormitorios,
            "bathrooms": self.bathrooms,
            "precio": self.precio,
            "descripcion": self.descripcion,
            "id": self.id,
            "calle": self.calle,
            "numero": self.numero,
            "codigo_postal": self.codigo_postal,
            "amenidades": amenidades
        }


class Amenidades(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    propiedades = db.relationship("Propiedad", secondary=association_table, back_populates="amenidades")
    amenity = db.Column(db.String(120), unique=True, nullable=False)
    propiedades = db.relationship(
        "Propiedad", secondary=association_table, back_populates="amenidades")
    amenity = db.Column(db.String(120), unique=False, nullable=False)

    @classmethod
    def get(cls, amenity):
        return cls.query.filter_by(amenity=amenity).one_or_none()

    def __str__(self):
        return str(self.amenity)

class Provincias(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    provincia = db.Column(db.String(120), unique=True, nullable=False)
    propiedades = db.relationship("Propiedad", backref="provincia")
    localidades = db.relationship("Localidades", backref="provincia")

    @classmethod
    def get(cls, provincia):
        return cls.query.filter_by(provincia=provincia).one_or_none()

    @classmethod
    def get_by_id(cls, id):
        return cls.query.get(id)

    def __str__(self):
        return str(self.provincia)

    def serialize(self):
        return {
            "id": self.id,
            "provincias": self.provincia,
        }

class Localidades(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    provincia_id = db.Column(db.Integer, db.ForeignKey('provincias.id'))
    propiedades = db.relationship("Propiedad", backref="localidad")
    localidad = db.Column(db.String(120), unique=True, nullable=False)

    @classmethod
    def get(cls, localidad):
        return cls.query.filter_by(localidad=localidad).one_or_none()

    @classmethod
    def get_by_id(cls, id):
        return cls.query.get(id)

    def __str__(self):
        return str(self.localidad)

    def serialize(self):
        return {
            "id": self.id,
            "localidad": self.localidad,
        }
        return str(self.amenity)
