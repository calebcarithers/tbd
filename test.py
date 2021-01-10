from flask import Flask
app = Flask(__name__)

@app.route("/update_data", methods=["POST"])
def hello():
	"""
	Client sends position clicked
	Generate random string
	Send google api requests to get image
	Store position, string, image url in DB
	Return to all connected clients via WS
	"""
	return "hello"

@app.route("/bitch")
def haha():
	return "oh nice"


