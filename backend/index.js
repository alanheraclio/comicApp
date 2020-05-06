const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const {mongoose} = require('./database');
const router = require('./routes/heroes.routes');

//SETINGS
const app = express();
app.set('port', process.env.PORT || 3000);
const port = app.get('port');

//MIDDLEWARES
app.use(morgan('dev'));
//app.use(cors({origin: 'http://127.0.0.1:8887'}));
app.use(cors({origin: 'http://localhost:4200'}));
app.use(express.json());

//ROUTES:need to be after cors.
app.use('/api/heroes',router);

//STARTING SERVER
app.listen(port, ()=>{
    console.log("server on port: ",port);
});
