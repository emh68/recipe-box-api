const express = require('express');
const app = express();
const mongodb = require('./db/connect');
const port = process.env.PORT || 8080;
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use('/', require('./routes/index.js'));


mongodb.initDb((err) => {
    if (err) {
        console.log(err);
    } else {
        app.listen(port, () => {
            console.log(`app listening on http://localhost:${port}`);
        });
    }
});