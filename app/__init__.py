from flask import Flask
from flask_cors import CORS

def create_app():
    app = Flask(__name__)
    CORS(app)
    setup_routes(app)

    @app.route("/healthy")
    def health_check():
        return "SmartBoy backend is running"

    return app
