from flask import Flask
from peewee import *
from google_images_search import GoogleImagesSearch
import os
from flask import request
from random_word import RandomWords


app = Flask(__name__, template_folder="/Users/imey/Desktop/tbd/client/")
# add necessary headers for cors shit
@app.after_request
def cors(response):
    response.headers['Access-Control-Allow-Origin'] = '*'
    if request.method == 'OPTIONS':
        response.headers['Access-Control-Allow-Methods'] = 'DELETE, GET, POST, PUT'
        headers = request.headers.get('Access-Control-Request-Headers')
        if headers:
            response.headers['Access-Control-Allow-Headers'] = headers
    return response

# params: Developer API KEY and then Search Engine ID or GCS_CX
gis = GoogleImagesSearch(os.environ["GIS_API_KEY"], os.environ["GIS_CX"])

db = PostgresqlDatabase(
    database=os.environ["POSTGRES_DB"],
    user=os.environ["POSTGRES_USER"],
    password=os.environ["POSTGRES_PASSWORD"],
    host=os.environ["POSTGRES_HOST"],
    port=os.environ["POSTGRES_PORT"]
)

# DB connection handlers
def before_request_handler():
    db.connect()
def after_request_handler():
    db.close()

logger = app.logger

random_word = RandomWords()
import flask_rest.routes
