from flask_sqlalchemy import SQLAlchemy
from flask import Flask

db = SQLAlchemy()

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
    user = db.relationship("User", back_populates="propiedades")
    calle = db.Column(db.String(120), unique=False, nullable=False)
    numero = db.Column(db.String(120), unique=False, nullable=False)
    ciudad = db.Column(db.String(120), unique=False, nullable=False)
    codigo_postal = db.Column(db.String(120), unique=False, nullable=False)
    provincia = db.Column(db.String(120), unique=False, nullable=False)
    dormitorios = db.Column(db.String(120), unique=False, nullable=False)
    huespedes = db.Column(db.String(120), unique=False, nullable=False)
    camas = db.Column(db.String(120), unique=False, nullable=False)
    bathrooms = db.Column(db.String(120), unique=False, nullable=False)
    descripcion = db.Column(db.String(120), unique=False, nullable=False)
    amenidades = db.relationship('Amenidades', back_populates="propiedad")

    @classmethod
    def create_propiedad(cls, user_id, calle, numero, ciudad, codigo_postal, provincia, dormitorios, huespedes, camas, bathrooms, descripcion):
        propiedad = cls()
        propiedad.user_id = user_id
        propiedad.calle = calle
        propiedad.numero = numero
        propiedad.ciudad = ciudad
        propiedad.codigo_postal = codigo_postal
        propiedad.provincia = provincia
        propiedad.dormitorios = dormitorios
        propiedad.huespedes = huespedes
        propiedad.camas = camas
        propiedad.bathrooms = bathrooms
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

class Provincias(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    provincia = db.Column(db.String(120), unique=False, nullable=False)

    @classmethod
    def create_provincias(cls, provincia):
        provincias = cls()
        provincias.provincia = provincia

        db.session.add(provincias)
        db.session.commit()


class Amenidades(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    propiedad_id = db.Column(db.Integer, db.ForeignKey('propiedad.id'))
    propiedad = db.relationship("Propiedad", back_populates="amenidades")
    piscina = db.Column(db.Boolean(), unique=False, nullable=False)
    cocina = db.Column(db.Boolean(), unique=False, nullable=False)
    parking = db.Column(db.Boolean(), unique=False, nullable=False)
    wifi = db.Column(db.Boolean(), unique=False, nullable=False)
    tv = db.Column(db.Boolean(), unique=False, nullable=False)
    aire_acondicionado = db.Column(db.Boolean(), unique=False, nullable=False)
    calefaccion = db.Column(db.Boolean(), unique=False, nullable=False)
    chimenea = db.Column(db.Boolean(), unique=False, nullable=False)
    agua_caliente = db.Column(db.Boolean(), unique=False, nullable=False)
    zona_trabajo = db.Column(db.Boolean(), unique=False, nullable=False)

    @classmethod
    def create_amenidades(cls, propiedad_id, piscina, cocina, parking, wifi, tv, aire_acondicionado, calefaccion, chimenea, agua_caliente, zona_trabajo):
        amenidades = cls()
        amenidades.propiedad_id = propiedad_id
        amenidades.piscina = piscina
        amenidades.cocina = cocina
        amenidades.parking = parking
        amenidades.wifi = wifi
        amenidades.tv = tv
        amenidades.aire_acondicionado = aire_acondicionado
        amenidades.calefaccion = calefaccion
        amenidades.chimenea = chimenea
        amenidades.agua_caliente = agua_caliente
        amenidades.zona_trabajo = zona_trabajo

        propiedad = Propiedad.get(propiedad_id)
        propiedad.amenidades.append(amenidades)

        db.session.add(amenidades)
        db.session.commit()

    def __str__(self):
        return str(self.id) or ""