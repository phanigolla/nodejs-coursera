const express = require('express');
const bodyParser = require('body-parser');

const dishRouter = express.Router(); //Router is part of express - no need to install it seperately

dishRouter.use(bodyParser.json());

dishRouter.route('/')
.all((req,res,next) => {
    res.statusCode=200;
    res.setHeader('Content-Type','text/plain');
    next(); //looks for additional specification
})
.get((req,res,next) =>{
    res.end('Will send all dishes to you!');
})
.post((req,res,next) => {
    res.end('Will add the dish : ' + req.body.name +  'with details : ' + req.body.description);
})
.put((req,res,next) => {
    res.statusCode=403;
    res.end('PUT operation not supported on dishes');
})
.delete((req,res,next) =>{
    res.end('Deletes all the dishes');
});

dishRouter.route('/:dishId')
.all((req,res,next) => {
    res.statusCode=200;
    res.setHeader('Content-Type','text/plain');
    next(); //looks for additional specification
})
.get((req,res,next) =>{
    res.end('Will send this dish with id' + req.params.dishId);
})
.post((req,res,next) => {
    res.statusCode=403;
    res.end('POST operation not supported on dishId : ' + req.params.dishId );
})
.put((req,res,next) => {
    res.write('Updating the dish with Id : ' + req.params.dishId + '\n');
    res.end('Will update the  dish ' + req.body.name + ' with details : ' + req.params.dishId);
    
})
.delete((req,res,next) =>{
    res.end('Deletes all the dishes with dishID : ' + req.params.dishId );
});

module.exports = dishRouter;