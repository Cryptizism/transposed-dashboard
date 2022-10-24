const express = require('express');
const app = express();
require('dotenv').config();
const path = require('path');
const port = process.env["WEBSITE_PORT"] || 3000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', (req: any, res: any) => {
    res.send('index');
});

module.exports = {
    instatiate: () => {
        app.listen(port, () => {
            console.log(`Website listening at http://localhost:${port}`);
        });
    }
};