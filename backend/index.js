const express = require('express');
const bodyParser = require('body-parser');
const accounts = require('./accounts.json')
const app = express();
const port = 8000;

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/login', (req, res) => {
    var body = req.body, msg = login_msg(body);
    console.log(body);
    console.log(msg);
    res.send(msg);
    res.status(200);
})

var server = app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
})

process.on('SIGINT', () => {
    server.close();
    console.log('Closed successfully');
});

function login_msg(body) {
    var email = body.email, password = body.password, is_success = false;
    if (email == '' || password == '') {
        return 'empty';
    }
    accounts.forEach((value) => {
        if (email == value.email && password == value.password) {
            is_success = true;
            return;
        }
    })
    if (is_success) return 'success';
    else return 'fail';
}
