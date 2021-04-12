from flask_sqlalchemy import SQLAlchemy
from flask import Flask

db = SQLAlchemy()

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
   