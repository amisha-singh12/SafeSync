const express= require('express');
const userRouter = require('./routes/user.routes');
const app= express();

app.set('view engine','ejs');

app.use('/user', userRouter);

app.get('/',(req,res) => {
    res.render('index');
})

app.listen(3000,() => {
    console.log('server is running on port 3000');
})