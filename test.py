from flask import Flask, request, render_template
from google_images_search import GoogleImagesSearch
from random_word import RandomWords

app = Flask(__name__, template_folder="/Users/imey/Desktop/tbd/client/")
# params: Developer API KEY and then Search Engine ID or GCS_CX
gis = GoogleImagesSearch('AIzaSyD4dQuHYxMAyGhJ4NOe3byXBK-SdWR6bkQ', 'e00b91f66e67f453c')


def get_word():
    r = RandomWords()
    word = r.get_random_word()
    print(str(word))
    return str(word)




@app.route("/position", methods=["GET", "POST"])


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

