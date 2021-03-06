const express = require('express');
const http = require('http');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const dishRouter = require('./routes/dishRouter');
const promoRouter = require('./routes/promoRouter');
const leaderRouter = require('./routes/leaderRouter');


const hostname = 'localhost';
const port = 3000;

const app =express();

app.use(morgan('dev'));

app.use('/dishes',dishRouter);
app.use('/promotions',promoRouter);
app.use('/leaders',leaderRouter);

app.use(express.static(__dirname+ '/public'));

app.use(bodyParser.json());

/* move this part of /dishes to dishRouter.js
app.all('/dishes',(req,res,next) => {
    res.statusCode=200;
    res.setHeader('Content-Type','text/plain');
    next(); //looks for additional specification
});

app.get('/dishes',(req,res,next) =>{
    res.end('Will send all dishes to you!');
});

app.post('/dishes',(req,res,next) => {
    res.end('Will add the dish : ' + req.body.name +  'with details : ' + req.body.description);
});

app.put('/dishes',(req,res,next) => {
    res.statusCode=403;
    res.end('PUT operation not supported on dishes');
});

app.delete('/dishes',(req,res,next) =>{
    res.end('Deletes all the dishes');
});

*/

/*
app.get('/dishes/:dishId',(req,res,next) =>{
    res.end('Will send details of the dish : ' + req.params.dishId + ' to you');
});

app.post('/dishes/:dishId',(req,res,next) => {
    res.statusCode=403;
    res.end('POST operation not supported on dishes ' + req.params.dishId);
});

app.put('/dishes/:dishId',(req,res,next) => {
    res.write('Updating the dish ' +req.params.dishId) +'\n';
    res.end('Will update the  dish ' + req.body.name + ' with details : ' + req.params.dishId);
});

app.delete('/dishes/:dishId',(req,res,next) =>{
    res.end('Deleting the dishId: ' + req.params.dishId);
});
*/



app.use((req,res,next) => {
        //console.log(req.headers);  // deleted this as Morgan will log the information
        res.statusCode=200;
        res.setHeader('Content-Type','text/html');
        res.end('<html><body><h1>This is Express Server</h1></body></html>');
});


const server =http.createServer(app);

server.listen(port,hostname,() => {

    console.log(`Server running at http://${hostname}:${port}`);
});

