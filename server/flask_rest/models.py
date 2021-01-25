from peewee import Model, UUIDField, DecimalField, TextField
from flask_rest.app import db

class BaseModel(Model):
    class Meta:
        database = db

class Clicks(BaseModel):
    id = UUIDField()
    x_pos = DecimalField()
    y_pos = DecimalField()
    image_url = TextField()
