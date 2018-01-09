const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();


app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

let messages=[{header:'hhh', message:'hh', code:0},
              {header:'gg', message:'gg', code:1},
              {header:'bbb', message:'bbb', code:2}];

app.get("/messages", function(request, response){
    response.json(messages);
});
app.post('/messages', function (request, response){
console.log(request);
if(!request.body.header || !request.body.message || !request.body.code){
    response.status(400).send('Invalid parameters!');

} else {
    messages.push({header: request.body.header, message: request.body.message, code: request.body.code});
    response.status(200);
}
});

app.post("/messages", function (request, response) {
    if(!request.body) return response.sendStatus(400);
    console.log(req.body);
    response.send(messages);
});


app.listen(3000, () => console.log('App listening on port 3000!'));

