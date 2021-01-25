from flask import Flask, request, render_template, jsonify
from peewee import *
from google_images_search import GoogleImagesSearch
from routes import *
import os

app = Flask(__name__, template_folder="/Users/imey/Desktop/tbd/client/")

# params: Developer API KEY and then Search Engine ID or GCS_CX
gis = GoogleImagesSearch(os.environ["GIS_API_KEY"], os.environ["GIS_CX"])

try:
    db = PostgresqlDatabase(
        database=os.environ["POSTGRES_DB"],
        user=os.environ["POSTGRES_USER"],
        password=os.environ["POSTGRES_PASSWORD"],
        host=os.environ["POSTGRES_HOST"],
        port=os.environ["POSTGRES_PORT"]
    )
except Exception as e:
    print(str(e))

# DB connection handlers
def before_request_handler():
    db.connect()
def after_request_handler():
    db.close()
