'use extrict'
const express = require('express');

function serverHttp(logger){
    const app = express();

    app.use(express.json());

    app.use(logger);

    app.get('/login', (req, res) => {
    res.send('olá DevPleno').status(400)
    }).post('/sign-in',(req, res)=>{
        console.log(req.body.name);
        res.json({'ok':'ok'})
    }).get('/error/:id',(req, res)=>{
    throw new Error(`teste de error ${req.params.id}!`)
    })
    
    return app;
};

module.exports = serverHttp;