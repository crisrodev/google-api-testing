import express from 'express';
import bodyParser from 'body-parser';
import setRoutes from './router.js';
import routes from './routes.js';

let port = process.env.PORT || 3000;
let service = express();
service.use(bodyParser.urlencoded({ extended: true }));
service.use(bodyParser.json());
service.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    next();
});


setRoutes(service, routes)
    .then(()=>{
        service.listen(port); 
        if(DEBUG) console.log(`Service started on: ${port}`);
    })
    .catch((err)=>{
        if(DEBUG) console.log(`Error setting routes: ${err}`);    
    })