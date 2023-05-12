const express = require('express');
const mongoose = require('mongoose');
const app = express();

const dbURL = 'mongodb+srv://AbodGx:123@cluster0.xu2yfoj.mongodb.net/The_Legends?retryWrites=true&w=majority'
mongoose.connect(dbURL , {useNewUrlParser : true , useUnifiedTopology : true})
    .then((result)=>console.log('connected to db'))
    .catch((error) => console.log('Error'))
app.listen(3000);
//TODO view engine
app.set('view engine' , 'ejs');
app.use(express.static('public'))


app.get('/', (req , res) =>{
    res.render('section')
});

app.get('/section', (req , res) =>{
    const sections = [
        { nameOFSection : 'Section 1'  ,goalOFSection : ' ' } ,
        {nameOFSection :'Section 2 ' , goalOFSection : 'aaaaa'}
    ]
    res.render('section'  , {sections} )
});