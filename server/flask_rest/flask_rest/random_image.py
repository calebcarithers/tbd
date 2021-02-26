from bs4 import BeautifulSoup
import requests
import random

def random_image(keyword):
    headers = {"User-Agent": "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:47.0) Gecko/20100101 Firefox/47.0"}
    url = f"https://www.google.com/search?hl=jp&q={keyword}&btnG=Google+Search&tbs=0&safe=off&tbm=isch"
    res = requests.get(url, headers)
    soup = BeautifulSoup(res.text, 'html.parser')

    imgs = soup.find_all('img')
    not_google = lambda x: x.get("alt") != "Google"
    non_goog = list(filter(not_google, imgs))
    img = non_goog[random.randrange(len(non_goog))].get("src")
    return img
