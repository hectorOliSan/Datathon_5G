from fastapi import FastAPI, HTTPException, Body
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
from fastapi.middleware.cors import CORSMiddleware

from pydantic import BaseModel

import joblib
import numpy as np

app = FastAPI()
app.mount("/imgs", StaticFiles(directory="imgs"), name='images')

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# the request base model with the params
class Request1(BaseModel):
    nombre_pais: float
    cod_distrito: int
    tipo_visitante: int
    tipo_dia: int
    fin_year: int
    fin_month: int
    fin_day: int
    inicio_year: int
    inicio_month: int
    inicio_day: int

# the request base model with the params
class Request2(BaseModel):
    nombre_pais: float
    day: int
    year: int
    month: int
    cod_distrito: int


# Cargar los modelos desde los archivos .pkl respectivos

with open("trained_models/visitantes.pkl", "rb") as modelo:
    modelo_visitantes = joblib.load(modelo)

with open("trained_models/amount.pkl", "rb") as modelo:
    modelo_amount = joblib.load(modelo)

# PÁGINA INICIO
@app.get("/", response_class=HTMLResponse)
async def read_root():
    """
    HTML de inicio de la API
    """

    # Lee el contenido HTML desde el archivo 'index.html'
    with open('index.html', 'rb') as file:
        html_content = file.read()

    return HTMLResponse(content=html_content, headers={"Content-Type": "text/html; charset=utf-8"}, status_code=200)

@app.post("/visitantes")
async def predict_visitantes(input_data: dict = Body(...)):
    try:
        valores = np.array(input_data['input_data']).reshape(1, -1)
        prediccion = modelo_visitantes.predict(valores)
        return {"num_visitantes": int(prediccion[0])}

    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error durante la predicción: {str(e)}")

@app.post("/amount")
async def predict_amount(input_data: dict = Body(...)):
    try:
        valores = np.array(input_data['input_data']).reshape(1, -1)
        prediccion = modelo_amount.predict(valores)
        print(prediccion)
        return {"amount": float(prediccion[0])}

    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error durante la predicción: {str(e)}")

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="127.0.0.1", port=8000)