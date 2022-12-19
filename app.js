const express = require('express');
const logger = require('morgan');
const LocalXpose = require('localxpose')
const client = new LocalXpose('')
const app = express();

app.use(logger('tiny'))
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.get("/",(req,res)=>{
    res.render('index');
    res.end()
})




app.listen(4001,()=>{
    console.log('listening on port 4001')
})