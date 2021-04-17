from flask_sqlalchemy import SQLAlchemy
from flask import Flask

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), unique=False, nullable=False)
    lastname = db.Column(db.String(120), unique=False, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.BINARY(80), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)
    token = db.Column(db.String(254), unique=True, nullable=True)
    propiedades = db.relationship('Propiedad', back_populates="user")

    @classmethod
    def create_user(cls, name, lastname, email, password):
        user = cls()
        user.name = name
        user.lastname = lastname
        user.email = email
        user.password = password
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
    comunidad = db.Column(db.String(120), unique=False, nullable=False)
    dormitorios = db.Column(db.String(120), unique=False, nullable=False)
    huespedes = db.Column(db.String(120), unique=False, nullable=False)
    camas = db.Column(db.String(120), unique=False, nullable=False)
    bathrooms = db.Column(db.String(120), unique=False, nullable=False)
    descripcion = db.Column(db.String(120), unique=False, nullable=False)

    @classmethod
    def create_propiedad(cls, user_id, calle, numero, ciudad, codigo_postal, comunidad, dormitorios, huespedes, camas, bathrooms, descripcion):
        propiedad = cls()
        propiedad.user_id = user_id
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

        user = User.get(user_id)

        user.propiedades.append(propiedad)

        db.session.add(propiedad)
        db.session.commit()

    # def __repr__(self):
    #     return '<Propiedad %r>' % self.propiedad

    # def serialize(self):
    #     return {
    #         "id": self.id,
    #         "calle": self.calle,
    #         "ciudad": self.ciudad,
    #         "codigo_postal": self.codigo_postal
    #         # do not serialize the password, its a security breach
    #     }

class Localidades(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    abrucena = db.Column(db.String(120), unique=False, nullable=False)
    agua_amarga = db.Column(db.String(120), unique=False, nullable=False)
    berja = db.Column(db.String(120), unique=False, nullable=False)
    las_negras = db.Column(db.String(120), unique=False, nullable=False)
    lucainena_de_las_torres = db.Column(
        db.String(120), unique=False, nullable=False)
    mojacar = db.Column(db.String(120), unique=False, nullable=False)
    rodalquilar = db.Column(db.String(120), unique=False, nullable=False)
    velez_blanco = db.Column(db.String(120), unique=False, nullable=False)

    arcos_de_la_frontera = db.Column(
        db.String(120), unique=False, nullable=False)
    castellar_de_la_frontera = db.Column(
        db.String(120), unique=False, nullable=False)
    chipiona = db.Column(db.String(120), unique=False, nullable=False)
    grazalema = db.Column(db.String(120), unique=False, nullable=False)
    medina_sidonia = db.Column(db.String(120), unique=False, nullable=False)
    olvera = db.Column(db.String(120), unique=False, nullable=False)
    sanlucar_de_barrameda = db.Column(
        db.String(120), unique=False, nullable=False)
    vejer_de_la_frontera = db.Column(
        db.String(120), unique=False, nullable=False)

    almodovar_del_rio = db.Column(db.String(120), unique=False, nullable=False)
    baena = db.Column(db.String(120), unique=False, nullable=False)
    espejo = db.Column(db.String(120), unique=False, nullable=False)
    iznajar = db.Column(db.String(120), unique=False, nullable=False)
    luque = db.Column(db.String(120), unique=False, nullable=False)
    priego_de_cordoba = db.Column(db.String(120), unique=False, nullable=False)
    zuheros = db.Column(db.String(120), unique=False, nullable=False)

    albañuelas = db.Column(db.String(120), unique=False, nullable=False)
    castril = db.Column(db.String(120), unique=False, nullable=False)
    guadix = db.Column(db.String(120), unique=False, nullable=False)
    montefrio = db.Column(db.String(120), unique=False, nullable=False)
    nigüelas = db.Column(db.String(120), unique=False, nullable=False)
    nivar = db.Column(db.String(120), unique=False, nullable=False)
    pampaneira = db.Column(db.String(120), unique=False, nullable=False)
    salobreña = db.Column(db.String(120), unique=False, nullable=False)
    trevelez = db.Column(db.String(120), unique=False, nullable=False)

    alcala_la_real = db.Column(db.String(120), unique=False, nullable=False)
    alcaudete = db.Column(db.String(120), unique=False, nullable=False)
    baeza = db.Column(db.String(120), unique=False, nullable=False)
    baños_de_la_encima = db.Column(
        db.String(120), unique=False, nullable=False)
    cazorla = db.Column(db.String(120), unique=False, nullable=False)
    hornos = db.Column(db.String(120), unique=False, nullable=False)
    la_iruela = db.Column(db.String(120), unique=False, nullable=False)
    ubeda = db.Column(db.String(120), unique=False, nullable=False)

    alajar = db.Column(db.String(120), unique=False, nullable=False)
    almonaster_la_real = db.Column(
        db.String(120), unique=False, nullable=False)
    ayamonte = db.Column(db.String(120), unique=False, nullable=False)
    aracena = db.Column(db.String(120), unique=False, nullable=False)
    el_rocio_almonte = db.Column(db.String(120), unique=False, nullable=False)
    el_rompido = db.Column(db.String(120), unique=False, nullable=False)
    jagubo = db.Column(db.String(120), unique=False, nullable=False)
    moguer = db.Column(db.String(120), unique=False, nullable=False)
    palos_de_frontera = db.Column(db.String(120), unique=False, nullable=False)

    antequera = db.Column(db.String(120), unique=False, nullable=False)
    archidona = db.Column(db.String(120), unique=False, nullable=False)
    casares = db.Column(db.String(120), unique=False, nullable=False)
    frigiliana = db.Column(db.String(120), unique=False, nullable=False)
    marbella = db.Column(db.String(120), unique=False, nullable=False)
    mijas = db.Column(db.String(120), unique=False, nullable=False)
    nerja = db.Column(db.String(120), unique=False, nullable=False)
    ojen = db.Column(db.String(120), unique=False, nullable=False)
    ronda = db.Column(db.String(120), unique=False, nullable=False)

    aznalcazar = db.Column(db.String(120), unique=False, nullable=False)
    carmona = db.Column(db.String(120), unique=False, nullable=False)
    cazalla_de_la_sierra = db.Column(
        db.String(120), unique=False, nullable=False)
    constatina = db.Column(db.String(120), unique=False, nullable=False)
    ecija = db.Column(db.String(120), unique=False, nullable=False)
    estepa = db.Column(db.String(120), unique=False, nullable=False)
    lebrija = db.Column(db.String(120), unique=False, nullable=False)
    marchena = db.Column(db.String(120), unique=False, nullable=False)
    osuna = db.Column(db.String(120), unique=False, nullable=False)
    sanlucar_la_mayor = db.Column(db.String(120), unique=False, nullable=False)
    santiponce = db.Column(db.String(120), unique=False, nullable=False)
    utrera = db.Column(db.String(120), unique=False, nullable=False)

    @classmethod
    def create_localidades(cls, abrucena, agua_amarga, berja, las_negras, lucainena_de_las_torres, mojacar, rodalquilar, velez_blanco,
                           arcos_de_la_frontera, castellar_de_la_frontera, chipiona, grazalema, medina_sidonia, olvera, sanlucar_de_barrameda, vejer_de_la_frontera,
                           almodovar_del_rio, baena, espejo, iznajar, luque, priego_de_cordoba, zuheros, albañuelas, castril, guadix, montefrio, nigüelas, nivar,
                           pampaneira, salobreña, trevelez, alcala_la_real, alcaudete, baeza, baños_de_la_encima, cazorla, hornos, la_iruela, ubeda,
                           alajar, almonaster_la_real, ayamonte, aracena, el_rocio_almonte, el_rompido, jagubo, moguer, palos_de_frontera, antequera, archidona, casares,
                           frigiliana, marbella, mijas, nerja, ojen, ronda, aznalcazar, carmona, cazalla_de_la_sierra, constatina, ecija, estepa, lebrija, marchena, osuna,
                           sanlucar_la_mayor, santiponce, utrera):
        localidades = cls()
        localidades.abrucena = abrucena
        localidades.agua_amarga = agua_amarga
        localidades.berja = berja
        localidades.las_negras = las_negras
        localidades.lucainena_de_las_torres = lucainena_de_las_torres
        localidades.mojacar = mojacar
        localidades.rodalquilar = rodalquilar
        localidades.velez_blanco = velez_blanco

        localidades.arcos_de_la_frontera = arcos_de_la_frontera
        localidades.castellar_de_la_frontera = castellar_de_la_frontera
        localidades.chipiona = chipiona
        localidades.grazalema = grazalema
        localidades.medina_sidonia = medina_sidonia
        localidades.olvera = olvera
        localidades.sanlucar_de_barrameda = sanlucar_de_barrameda
        localidades.vejer_de_la_frontera = vejer_de_la_frontera

        localidades.almodovar_del_rio = almodovar_del_rio
        localidades.baena = baena
        localidades.espejo = espejo
        localidades.iznajar = iznajar
        localidades.luque = luque
        localidades.priego_de_cordoba = priego_de_cordoba
        localidades.zuheros = zuheros

        localidades.albañuelas = albañuelas
        localidades.castril = castril
        localidades.guadix = guadix
        localidades.montefrio = montefrio
        localidades.nigüelas = nigüelas
        localidades.nivar = nivar
        localidades.pampaneira = pampaneira
        localidades.salobreña = salobreña
        localidades.trevelez = trevelez

        localidades.alcala_la_real = alcala_la_real
        localidades.alcaudete = alcaudete
        localidades.baeza = baeza
        localidades.baños_de_la_encima = baños_de_la_encima
        localidades.cazorla = cazorla
        localidades.hornos = hornos
        localidades.la_iruela = la_iruela
        localidades.ubeda = ubeda

        localidades.alajar = alajar
        localidades.almonaster_la_real = almonaster_la_real
        localidades.ayamonte = ayamonte
        localidades.aracena = aracena
        localidades.el_rocio_almonte = el_rocio_almonte
        localidades.el_rompido = el_rompido
        localidades.jagubo = jagubo
        localidades.moguer = moguer
        localidades.palos_de_frontera = palos_de_frontera

        localidades.antequera = antequera
        localidades.archidona = archidona
        localidades.casares = casares
        localidades.frigiliana = frigiliana
        localidades.marbella = marbella
        localidades.mijas = mijas
        localidades.nerja = nerja
        localidades.ojen = ojen
        localidades.ronda = ronda

        localidades.aznalcazar = aznalcazar
        localidades.carmona = carmona
        localidades.cazalla_de_la_sierra = cazalla_de_la_sierra
        localidades.constatina = constatina
        localidades.ecija = ecija
        localidades.estepa = estepa
        localidades.lebrija = lebrija
        localidades.marchena = marchena
        localidades.Osuna = Osuna
        localidades.sanlucar_la_mayor = sanlucar_la_mayor
        localidades.santiponce = santiponce
        localidades.utrera = utrera

        db.session.add(localidades)
        db.session.commit()

class Provincias(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    almeria = db.Column(db.String(120), unique=False, nullable=False)
    cadiz = db.Column(db.String(120), unique=False, nullable=False)
    cordoba = db.Column(db.String(120), unique=False, nullable=False)
    granada = db.Column(db.String(120), unique=False, nullable=False)
    huelva = db.Column(db.String(120), unique=False, nullable=False)
    jaen = db.Column(db.String(120), unique=False, nullable=False)
    malaga = db.Column(db.String(120), unique=False, nullable=False)
    sevilla = db.Column(db.String(120), unique=False, nullable=False)

    @classmethod
    def create_provincias(cls, almeria, cadiz, cordoba, granada, huelva, jaen, malaga, sevilla):
        provincias = cls()
        provincias.almeria = almeria
        provincias.cadiz = cadiz
        provincias.cordoba = cordoba
        provincias.granada = granada
        provincias.huelva = huelva
        provincias.jaen = jaen
        provincias.malaga = malaga
        provincias.sevilla = sevilla

        db.session.add(provincias)
        db.session.commit()


class Amenidades(db.Model):
    id = db.Column(db.Integer, primary_key=True)
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
    def create_amenidades(cls, piscina, cocina, parking, wifi, tv, aire_acondicionado, calefaccion, chimenea, agua_caliente, zona_trabajo):
        amenidades = cls()
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

        db.session.add(amenidades)
        db.session.commit()
