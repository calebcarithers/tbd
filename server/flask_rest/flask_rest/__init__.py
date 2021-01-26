from flask import Flask
from peewee import *
from google_images_search import GoogleImagesSearch
import os

app = Flask(__name__, template_folder="/Users/imey/Desktop/tbd/client/")

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

import flask_rest.routes
