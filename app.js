const nodemailer = require('nodemailer');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(express.static('/index.html'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', (req, res) => {
    res.render('form-group');
});

app.post('/send', (req, res) => {
    // mail = {
    //     to: 'arzekeil.abel@gmail.com',
    //     subject: req.body.subject,
    //     body: req.body.message,
    // }
    console.log(req.body);
});

// const transport = nodemailer.createTransport({
//     service: 'gmail',
//     auth:{
//         user: "arzekeil.abel@gmail.com",
//         pass: "073518441"
//     }
// });
// let info = await transporter.sendMail({
//     from: req.body.email, // sender address
//     to: "arzekeil.abel@gmail.com", // list of receivers
//     subject: req.body.subject, // Subject line
//     text: req.body.message, // plain text body
//     html: "<b>Hello world?</b>", // html body
// });

app.listen(3000, () =>{
    console.log('Server is running on port 3000');
})