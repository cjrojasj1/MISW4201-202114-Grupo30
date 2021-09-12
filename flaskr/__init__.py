from flask import Flask

def create_app(config_name):
    app = Flask(__name__)
    app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://evfmprcffrrhge:d642fd46b24a5b5700373cfd34bb3e7a191a242f921f7a764849598c97c64555@ec2-34-196-238-94.compute-1.amazonaws.com:5432/d6botfbgspjcrl'
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    app.config['JWT_SECRET_KEY']='frase-secreta'
    app.config['PROPAGATE_EXCEPTIONS'] = True
    return app

