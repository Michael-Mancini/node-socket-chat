const path = require('path');
const express = require('express');

const port = process.env.PORT || 3000;

var app = express();

// remove duplicate directory changes
const publicPath = path.join(__dirname, '../public');

app.use(express.static(publicPath));

app.listen(port, () => {
    console.log(`Server started on port: ${3000}`);
});