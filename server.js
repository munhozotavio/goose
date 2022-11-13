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

const cars = [
    {plate:"ASD2323", 
    address: 'R. Sérgio Buarque De Holanda - Cidade Universitária, Campinas - SP, 13083-859', // CB
    center: {
        lat: -22.815750,
        lng: -47.069420,
    }},
    {plate:"QSF4521",
    address: 'UNICAMP Universidade Estadual De Campinas - Av. Albert Einstein, 1251 - Cidade Universitária, Campinas - SP, 13083-852', //IC
    center: {
        lat: -22.814461,
        lng: -47.064388,
    }},
    {plate:"FUR1526",
    address: 'Rua Josué De Castro, S/N - Cidade Universitária, Campinas - SP, 13083-970', //IQ
    center: {
        lat: -22.820900,
        lng: -47.065630,
    }},
    {plate:"MNC8989",
    address: 'R. Monteiro Lobato, 80 - Cidade Universitária, Campinas - SP, 13083-862', //FEA
    center: {
        lat: -22.819660,
        lng: -47.068620,
    }}
];

const defaultData = {
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
        const carLocation = cars.find(e => e.plate == req.body.plate)
        if (carLocation) {
            const location = {
                ...defaultData,
                ...carLocation
            }
            res.send(location);
        } else { 
            console.log("Car not found :x") //Handle error 
        }
        
    }
});


app.use("/getCars", (req, res) => {
    if (req.body.access_token != null) {
        res.send(cars);
    }
});

app.listen(8080, () => console.log("API IS RUNNING"));