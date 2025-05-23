from flask import Flask
from app.routes import setup_routes

def create_app():
    app = Flask(__name__)
    app.config['UPLOAD_FOLDER'] = "uploads"
    setup_routes(app)
    return app