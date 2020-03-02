require('dotenv').config()
const express = require('express'),
      massive = require('massive'),
      session = require('express-session'),
      authCtrl = require('./controllers/authController'),
      skillCtrl = require('./controllers/skillController'),
      cartCtrl = require('./controllers/cartController'),
      emailCtrl = require('./controllers/mailerController'),
      {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env,
      app = express();

      
app.use( express.static( `${__dirname}/../build` ) )
app.use(express.json())
app.use(
    session({
        resave: false,
        saveUninitialized: true,
        secret: SESSION_SECRET,
        cookie: {maxAge: 1000 * 60 * 60 * 24 * 30}
    })
    )


massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    console.log('db connected')
    const port = SERVER_PORT;
    app.listen(port, () => console.log(`Building on port: ${port}`));
})


// AUTH ENDPOINTS
app.post('/auth/login', authCtrl.login);
app.post('/auth/register', authCtrl.register);
app.post('/auth/logout', authCtrl.logout);
app.post('/auth/checkPassword', authCtrl.checkPassword);
app.post('/auth/newPassword', authCtrl.editPassword);

// SKILL for products ENDPOINT
app.get('/api/skill/:id', skillCtrl.getSkill);

//USERCART ENDPOINT
app.get('/api/cart/:id', cartCtrl.getCart);
app.post('/api/cart', cartCtrl.addToCart);
app.delete('/api/cart/:id', cartCtrl.removeFromCart);
app.post('/api/payment', cartCtrl.payment);

//NODEMAILER
app.post('/api/email', emailCtrl.email);


const path = require('path');

app.get((req, res)=>{
    res.sendFile(path.join(__dirname, '../build/index.html'));
});