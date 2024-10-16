require('dotenv').config();
require("./passport");
const express = require('express');
const session = require('express-session');
const passport = require('passport');
const cors = require('cors');

const app = express();

app.use(cors({
    origin:["http://localhost:3000"],
    methods:["GET","POST","DELETE"],
    credentials:true
}))

app.use(session({
    name:"_gsid",
    secret:process.env.SESSION_KEY,
    resave:false,
    saveUninitialized:true,
    cookie: { secure: false, httpOnly: false },
}))
app.use(passport.initialize());
app.use(passport.session());
app.use(express.json());



app.get('/',(req,res)=>{
    res.send("server is working...")
})

app.get('/google/auth',
    passport.authenticate("google", { scope: ["email", "profile"] })
)

app.get('/google/callback',
    passport.authenticate("google", {
        failureRedirect: process.env.GOOGLE_FAILURE_REDIRECT_URL,
        successRedirect: process.env.GOOGLE_SUCCESS_REDIRECT_URL
      })
)

app.listen(5000,(err)=>{
    if(err){
        console.log('Err while starting a server ')
    }else{
        console.log("Server started at 5000")
    }
})