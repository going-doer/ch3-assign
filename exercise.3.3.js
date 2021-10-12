const express = require('express');

const app = express();
const port = 3000;

app.get('/factorial', (req, res) =>  {
    const {number} = req.query;
    res.redirect(`/factorial/${number}`);
});
app.get('/factorial/:number', (req, res) =>  {
    const {number} = req.params;

    const limit = parseInt(number, 10);
    var fact = 1;
    for(let i=2; i<limit; i++){
        fact *= i;
    }
    res.send(`${fact}`);
});

app.listen(port, () => console.log(`Server listening on port ${port}!`));