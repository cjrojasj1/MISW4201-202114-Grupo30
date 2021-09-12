from flask import Flask

def create_app(config_name):
    app = Flask(__name__)
    app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://kjosjrtnrealjx:85ad673d071c6bc77a1f048b4c5198a9bcca0ad6e307d10ddb90cd9c392f3e28@ec2-52-6-211-59.compute-1.amazonaws.com:5432/d6893b5hqflrsu'
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    app.config['JWT_SECRET_KEY']='frase-secreta'
    app.config['PROPAGATE_EXCEPTIONS'] = True
    return app
