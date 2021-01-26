from flask import request, jsonify, render_template
from flask_rest import app
from flask_rest.models import Clicks
from random_word import RandomWords
import uuid

def get_word():
    r = RandomWords()
    word = r.get_random_word()
    print(str(word))
    return str(word)


def hello():
    print("hello")
    print(request.method, "\n")

    if request.method == "POST":
        return "This is a post request"

    """
	+Client sends position clicked
	Generate random string
	Send google api requests to get image
	Store position, string, image url in DB
	Return to all connected clients via WS
	"""

    return "this is a GET request from positon"



@app.route("/bitch", methods=["GET"])
def pls():
    x = get_word()

    return x

@app.route("/test", methods=["GET"])
def test():
	return jsonify({"test": "great"})

@app.route("/NO", methods=["GET"])
def initial():
    return render_template('index.html')


# # list of random words to choose from
# # define search params:
# _search_params = {
#     'q': str(get_word()),
#     'num': 1,
# }
#
# # this will search and download:
# gis.search(search_params=_search_params, path_to_dir='/Users/imey/Desktop/tbd/client',custom_image_name='my_image')

@app.route("/position/test", methods=["GET", "POST"])
def pos_test():
    # return jsonify({"success": True})
    if request.method == "POST":
        x_pos = request.json.get("x_pos", None)
        y_pos = request.json.get("y_pos", None)
        if x_pos is None or y_pos is None:
            return jsonify({"success": False, "message": "You must post an x and y pos"}), 400
        else:
            click = Clicks.create(
                id = uuid.uuid4(),
                x_pos = x_pos,
                y_pos = y_pos,
                image_url = "test.com"
            )
            return jsonify({"success": True})