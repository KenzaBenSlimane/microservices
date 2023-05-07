const express = require('express');
const cors = require('cors');
const proxy = require('express-http-proxy');


const app = express();


app.use(express.json());

app.use(cors(
    {
        origin: "http://localhost:4200"
    }
));

app.use('/campagneService',proxy('http://localhost:8004'))
app.use('/gestionEquipe', proxy('http://localhost:8003'))
app.use('/gestionCompte', proxy('http://localhost:8002'))
app.use('/', proxy('http://localhost:8001')) //authentification


app.listen(8000, () => {
    console.log('Gateway is listening to port 8000')
})