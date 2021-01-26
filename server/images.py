from random_word import RandomWords
from google_images_search import GoogleImagesSearch

def get_word():
    r = RandomWords()
    word = r.get_random_word()
    print(str(word))
    return str(word)





# params: Developer API KEY and then Search Engine ID or GCS_CX
gis = GoogleImagesSearch('API KEY', 'GCS_Cx')

# define search params:
_search_params = {
    'q': get_word(),
    'num': 1,
}

# this will search and download:
gis.search(search_params=_search_params, path_to_dir='/Users/imey/Desktop/tbd/client',custom_image_name='my_image')
