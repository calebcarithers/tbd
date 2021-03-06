from flask import Flask
from peewee import *
import os
from flask import request
from flask_rest.my_json_encoder import my_json_encoder

app = Flask(__name__, template_folder="/Users/imey/Desktop/tbd/client/")
app.json_encoder = my_json_encoder
logger = app.logger

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
