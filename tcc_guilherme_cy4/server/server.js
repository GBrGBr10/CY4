const express = require("express");
const cors = require("cors");


require('dotenv').config();

const connectDB = require("./db");

const MAIL = process.env.MAIL;

const app = express();


app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

connectDB();

app.listen(MAIL, () => {
 console.log(`Servidor escutando a porta ${MAIL}`);
});