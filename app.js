const express = require('express');
const app = express();

app.listen(3000);
//TODO view engine
app.set('view engine' , 'ejs');

app.get('/', (req , res) =>{
    res.render('section')
});

app.get('/section', (req , res) =>{
    res.render('section')
});