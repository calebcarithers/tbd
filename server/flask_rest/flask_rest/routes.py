from flask import request, jsonify
from flask_rest import app, logger
from flask_rest.models import Clicks
from flask_rest.random_image import random_image
from flask_rest.random_word import random_word
import uuid

@app.route("/position/test", methods=["GET", "POST"])
def pos_test():
    if request.method == "POST":
        x_pos = request.json.get("x_pos", None)
        y_pos = request.json.get("y_pos", None)
        print(f"xpos: {x_pos}")
        if x_pos is None or y_pos is None:
            return jsonify({"success": False, "message": "You must post an x and y pos"}), 400
        else:
            url = random_image(random_word())
            Clicks.create(
                id = uuid.uuid4(),
                x_pos = x_pos,
                y_pos = y_pos,
                image_url = url
            )
            return jsonify({"url": url}), 200
    elif request.method == "GET":
        query = Clicks.select()
        r = jsonify([{"url": t.image_url, "x_pos": t.x_pos, "y_pos": t.y_pos} for t in query])
        return r