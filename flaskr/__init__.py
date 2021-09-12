from flask import Flask

def create_app(config_name):
    app = Flask(__name__)
    app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://ykwkvgzcqpzeei:3e252612d30a34c79b87e104b9393cd67d99da45ddef730a163b9bf34663481f@ec2-44-195-201-3.compute-1.amazonaws.com:5432/d2c9ftgqlhc0up'
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    app.config['JWT_SECRET_KEY']='frase-secreta'
    app.config['PROPAGATE_EXCEPTIONS'] = True
    return app

