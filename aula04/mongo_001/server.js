//Boa prática 1 Requisitar as bibliotecas
const express = require("express") ;
const connectDB = require("./config/config");

//Boa prática 2
connectDB();

//Boa prática 3 - criar servidor
const app = express();
app.use(express.json());
/*
app.get("/divide", (req, res) => {
    
    try {
        const numerador = 10;
        const denominador = 5;

        if (denominador === 0) {
            res.status(400).json({error: "Não é possível dividir por zero!"});
            return;
        }
    const resultado = numerador / denominador;
    res.json({resultado});

    
    } catch (err) {
        res.status(500).json({error: 'Erro no servidor'})
    };
} )
*/

app.get("/divide", (req, res) => {
    
    try {
        const numerador = 10;
        const denominador = 5;

        if (denominador === 0) {
            throw new Error('Erro: Não é possível dividir por zero!')
        }
    const resultado = numerador / denominador;
    res.json({resultado});

    
    } catch (err) {
        res.status(500).json({error: err.message})
    };
} );

app.get("/divide_html", (req, res) => {
    
    try {
        const numerador = 10;
        const denominador = 5;

        if (denominador === 0) {
            throw new Error('Erro: Não é possível dividir por zero!')
        }
    const resultado = numerador / denominador;
    //res.json({resultado});
    res.send(
        /*html*/`
        <!DOCTYPE html>
            <html lang="pt-br">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
            <style>

                h1{
                    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
                    background-color: antiquewhite;
                }

                body{
                    display: flex;
                    justify-items: center;
                    align-items: center;
                }

            </style>
        </head>
        <body>
            <div>
                <h1>Resultado da Divisão</h1>
                <div>${resultado}</div>
            </div>
        </body>
            </html>
            `
    )
    
    } catch (err) {
        res.status(500).json({error: err.message})
    };
} );

//Boa prática 4 - Ligar numa porta
app.listen(3000, () => console.log("Server running on port 3000"))