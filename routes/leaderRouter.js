const express = require('express');
const bodyParser = require('body-parser');

const leaderRouter = express.Router();

leaderRouter.use(bodyParser.json());

leaderRouter.route('/')
.all((req,res,next) => {
    res.statusCode=200;
    res.setHeader('Content-Type','text/plain');
    next(); //looks for additional specification
})
.get((req,res,next) =>{
    res.end('Will send all leaders to you!');
})
.post((req,res,next) => {
    res.end('Will add the leader : ' + req.body.name +  ' with details : ' + req.body.description);
})
.put((req,res,next) => {
    res.statusCode=403;
    res.end('PUT operation not supported on leaders');
})
.delete((req,res,next) =>{
    res.end('Deletes all the leaders');
});

leaderRouter.route('/:leaderId')
.all((req,res,next) => {
    res.statusCode=200;
    res.setHeader('Content-Type','text/plain');
    next(); //looks for additional specification
})
.get((req,res,next) =>{
    res.end('Will send this leader details with id : ' + req.params.leaderId);
})
.post((req,res,next) => {
    res.statusCode=403;
    res.end('POST operation not supported on leaderId : ' + req.params.leaderId );
})
.put((req,res,next) => {
    res.write('Updating the leader with Id : ' + req.params.leaderId + '\n');
    res.end('Will update the  leaders ' + req.body.name + ' with details : ' + req.params.leaderId);
    
})
.delete((req,res,next) =>{
    res.end('Deletes all the info of leader with leaderId : ' + req.params.leaderId );
});

module.exports = leaderRouter;
