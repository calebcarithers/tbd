from flask import request, jsonify
from flask_rest import app, logger
from flask_rest.models import Clicks
from flask_rest.random_image import random_image
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
            url = random_image("dick")
            logger.info(f"URL: {url}")
            Clicks.create(
                id = uuid.uuid4(),
                x_pos = x_pos,
                y_pos = y_pos,
                image_url = url
            )
            return jsonify({"url": url}), 200
    elif request.method == "GET":
        urls = []
        return jsonify({"urls": urls})