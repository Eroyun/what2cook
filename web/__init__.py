from flask import Flask
from flask_cors import CORS
from web.routes import filter
from web.routes import search


def create_app():
    app = Flask(__name__)
    CORS(app, origins="*")

    app.register_blueprint(filter.bp)
    app.register_blueprint(search.bp)

    return app
