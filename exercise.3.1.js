const express = require('express');

const app = express();
const port = 3000;

app.use(express.urlencoded({extended: true}));


app.get('/', (req, res) =>  {
    const {query} = req;
    res.send(Object.keys(query).map(k => `${k}: ${query[k]}`).join('\n'));
});
app.post('/', (req, res) =>  {
    const {body} = req;
    res.send(Object.keys(body).map(k => `${k}: ${body[k]}`).join('\n'));
});
app.put('/', (req, res) =>  {
    const {body} = req;
    res.send(Object.keys(body).map(k => `${k}: ${body[k]}`).join('\n'));
});
app.delete('/', (req, res) =>  {
    const {body} = req;
    res.send(Object.keys(body).map(k => `${k}: ${body[k]}`).join('\n'));
});

app.listen(port, () => console.log(`Server listening on port ${port}!`));