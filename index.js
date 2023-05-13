const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('chef is coming');
});

app.listen(port, () => {
    console.log(`chef api is coming on port: ${port}`);
});
