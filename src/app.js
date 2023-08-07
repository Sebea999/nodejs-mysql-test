// ---------------------------------------------------------------------
// TUTORIAL:    https://www.youtube.com/watch?v=VxRXlUrV6y0
// ---------------------------------------------------------------------
// archivo encargado de ejecutar e inicializar todo el servidor
const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql');
const myConnection = require('express-myconnection');

const app = express();

// importing routes
const customerRoutes = require('./routes/customer');


// settings 
app.set('port', process.env.PORT || 3000)
app.set('view engine', 'ejs') // le digo que el motor de plantillas sera con ejs 
app.set('views', path.join(__dirname, 'views')) // establezco la direccion de las vistas // OBS: es importante que se escriba bien el name "views" porque si cambias algo, ejemplo escribir "view", va a saltar un error de renderizado de vistas porque no va a encontrar el path.-
    //app.set('views', __dirname+'/views') // establezco la direccion de las vistas // OBS: de esta manera me funciona tambien el renderizado de vistas 


// middlewares 
app.use(morgan('dev'));
app.use(myConnection(mysql, {
    host: 'localhost', 
    user:'root', 
    password:'admin', 
    port:3306,
    database:'odonto'
}, 'single'));


// routes 
app.use('/', customerRoutes);

// static files 
app.use(express.static(path.join(__dirname, 'public')));

app.listen(app.get('port'), () => {
    console.log('Server on port 3000');
});

