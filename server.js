const express = require("express")
const cors = require('cors');
const routes = require('./routes');
const connect = require("./config/Dadabase")

require('dotenv').config();


const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(routes)




const PORT = process.env.PORT

app.listen(PORT,()=>{
    console.log("Server Work in Port  : " , PORT)
})