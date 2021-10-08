#https://coinmarketcap.com/exchanges/coinbase-exchange/ for currency-pair
import requests
import json


curr = input("\nWhich crypto currency rate you want to know? ")


response = requests.get("https://api.coinbase.com/v2/prices/" + curr + "-USD/spot")
if response:
    data = response.json()
    currency = data["data"]["base"]
    price = data["data"]["amount"]
    print(f"1 {currency}\nRate = ${price}")
