var express = require('express'),
    app = express(),
    bp = require('body-parser'),
    path = require('path'),
    session = require('express-session')
    // PORT = process.env.PORT || 8000;
    PORT = 8000;

app.use(express.static(path.join(__dirname,'/client')))
app.use(express.static(path.join(__dirname,'/server')))
app.use(express.static(path.join(__dirname,'/node_modules')))
app.use(bp.json());
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}))

// require('./server/config/mongoose.js');

// require('./server/config/routes.js')(app);
app.listen(PORT, function(){
    console.log(`Listening on port ${PORT}`)
})