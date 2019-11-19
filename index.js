const express = require('express');
const bodyParser = require('body-parser');

const config = require('./config/index.js');
const DBConn = require('./db/connection');
const students = require('./handlers/students');

var c = config.getConfig('db');
console.log(c)

DBConn.init(c);
const api = express();

api.use(bodyParser.json());

// Routes //
api.get('/api/v1/students', students.getAll);
api.get('/api/v1/students/:id', students.getOne);
api.post('/api/v1/students', students.save);
api.put('/api/v1/students/:id', students.replace);
api.patch('/api/v1/students/:id', students.update);
api.delete('/api/v1/students/:id', students.remove);

api.listen(8000, err => {
    // console.log(api)
    if(err){
        console.log('could not start server');
        console.log(err);
        return;
    }
    console.log('server started successfully on port 8000');
});
