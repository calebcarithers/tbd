from flask import Flask, request, jsonify
app = Flask(__name__)

@app.route("/position", methods=["POST"])
def hello():
	"""
	+Client sends position clicked
	Generate random string
	Send google api requests to get image
	Store position, string, image url in DB
	Return to all connected clients via WS
	"""
	body = request.json

	return body

@app.route("/test", methods=["GET"])
def test():
	return "test"



