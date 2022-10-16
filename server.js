// Mock api to test the components before the true api is done

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

const validLogins = [{email:"o204280@dac.unicamp.br", password:"teste"},{email:"a213368",password:"teste"}];

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

app.listen(8080, () => console.log("API IS RUNNING"));