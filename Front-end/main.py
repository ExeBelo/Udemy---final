from bs4 import BeautifulSoup
import requests
from fastapi import FastAPI

app = FastAPI()
url = "https://dolarhoy.com/cotizaciondolaroficial"


@app.get("/compra")
def compra():
    response = requests.get(url)

    if response.status_code == 200:
        html = response.text
        soup = BeautifulSoup(html, "html.parser")
        cuadrado_dolar = soup.find("div",{"class":  "tile"})
        valores = cuadrado_dolar.find_all("div",{"class": "value"})
        dolar_compra = valores[1].text[1:]
        dolar_compra = dolar_compra.replace(",", ".")
        dolar_compra = dolar_compra.replace("$", "")
        dolar_compra = float(dolar_compra)
        return int(dolar_compra)

@app.get("/venta")
def venta():
    response = requests.get(url)

    if response.status_code == 200:
        html = response.text
        soup = BeautifulSoup(html, "html.parser")
        cuadrado_dolar = soup.find("div",{"class":  "tile"})
        valores = cuadrado_dolar.find_all("div",{"class": "value"})
        dolar_venta = valores[0].text[0:]
        
        dolar_venta = dolar_venta.replace(",", ".")
        dolar_venta = dolar_venta.replace("$", "")
        dolar_venta = float(dolar_venta)
        return int(dolar_venta)