import decimal
import flask.json

class my_json_encoder(flask.json.JSONEncoder):
    def default(self, o):
        if isinstance(o, decimal.Decimal):
            return float(o)
        return super(my_json_encoder, self).default(o)