// Mock api to test the components before the true api is done

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require('dotenv').config()

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

const validLogins = [{email:"o204280@dac.unicamp.br", password:"teste"},{email:"a213368",password:"teste"}];


const defaultLocation = {
    address: 'R. Sérgio Buarque De Holanda - Cidade Universitária, Campinas - SP, 13083-859',
    center: {
        lat: -22.815750,
        lng: -47.069420,
    },
    apiKey: process.env.GOOGLE_API_KEY
}

app.use("/login", (req, res) => {
    let validUser = false;
    validLogins.forEach(validLogin => {
        if (req.body.email == validLogin.email && req.body.password == validLogin.password){
            validUser = true;
            return;
        }
    });
    if (validUser)
        res.send({access_token: 'tempToken123'});
    else 
        res.send({});
});


app.use("/location", (req, res) => {
    if (req.body.access_token != null) {
        res.send(defaultLocation);
    }
})

app.listen(8080, () => console.log("API IS RUNNING"));