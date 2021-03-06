from bs4 import BeautifulSoup
import requests
import random

def random_word():
    """
    Grab a rand word from dictionary.com
    """
    headers = {"User-Agent": "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:47.0) Gecko/20100101 Firefox/47.0"}
    url = "https://www.dictionary.com/e/word-of-the-day/"
    res = requests.get(url, headers)
    soup = BeautifulSoup(res.text, 'html.parser')

    wotd = soup.find("div", {"class": "otd-item-headword__word"})
    return wotd.text

