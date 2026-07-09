const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

require('dotenv').config();

const mailboxRoutes = require("./routes/mailboxRoutes")
const connectDB = require("./db");

const MAIL = process.env.MAIL;

const app = express();


app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api", mailboxRoutes);


connectDB();

app.listen(MAIL, () => {
 console.log(`Servidor escutando a porta ${MAIL}`);
 console.log(process.env.ATLAS_URI);;
});