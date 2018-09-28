const express = require('express');
const bodyParser = require('body-parser');

const promoRouter = express.Router();

promoRouter.use(bodyParser.json());

promoRouter.route('/')
.all((req,res,next) => {
    res.statusCode=200;
    res.setHeader('Content-Type','text/plain');
    next(); //looks for additional specification
})
.get((req,res,next) =>{
    res.end('Will send all promotions to you!');
})
.post((req,res,next) => {
    res.end('Will add the promotion : ' + req.body.name +  ' with details : ' + req.body.description);
})
.put((req,res,next) => {
    res.statusCode=403;
    res.end('PUT operation not supported on Promotions');
})
.delete((req,res,next) =>{
    res.end('Deletes all the Promotions');
});

promoRouter.route('/:promoId')
.all((req,res,next) => {
    res.statusCode=200;
    res.setHeader('Content-Type','text/plain');
    next(); //looks for additional specification
})
.get((req,res,next) =>{
    res.end('Will send the promotions details with id : ' + req.params.promoId);
})
.post((req,res,next) => {
    res.statusCode=403;
    res.end('POST operation not supported on promoId : ' + req.params.promoId );
})
.put((req,res,next) => {
    res.write('Updating the Promotions with Id : ' + req.params.promoId + '\n');
    res.end('Will update the  promotions ' + req.body.name + ' with details : ' + req.params.promoId);
    
})
.delete((req,res,next) =>{
    res.end('Deletes all the info of promotion with promoId : ' + req.params.promoId );
});

module.exports = promoRouter;
