const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
const knex = require('knex');
const register = require('./controllers/register');
const signin = require('./controllers/Signin');
const profile = require('./controllers/Profile');
const image = require('./controllers/Image');

const db = knex({
    client: 'pg',
    connection: {
        host: '127.0.0.1',
        user: 'seandees',
        password: '',
        database: 'smart-brain'
    }
}); 

db.select('*').from('users').then(data => {
    console.log(data)
});

app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => res.send(database.users));
app.get('/profile/:id', (req, res) => {msWriteProfilerMark.handleProfile(req, res, db)});
app.post('/signin', (req, res) => {signin.handleSignin(req,res,db,bcrypt)});
app.post('/register', (req, res) => {register.handleRegister(req,res,db,bcrypt)});
app.put('/image', (req, res, db) => {Image.handleImage(req,res, db) });

app.listen(process.env.PORT || 3000, () =>{
    console.log(`app is running on post ${process.evn.PORT}`);
});

