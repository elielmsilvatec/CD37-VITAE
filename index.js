const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const curriculoController = require('./curriculo/curriculoController');



app.set('view engine', 'ejs');
app.use(express.static('public'));
// Body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



app.use("/", curriculoController);


app.listen(3000, ()=>{console.log("App rodando!")})





