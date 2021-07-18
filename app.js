const express = require('express');

const app = express();
const users = [{
    name: 'Visal', age: 22
},
{
    name: 'Chamuditha', age: 22
},
{
    name: 'Dharmasiri', age: 22
}];

const posts = [{
    title: 'My favourite Vehical is BMW M4'
}];

app.get('/', (req, res) => {
    res.send({
        msg: 'Hello',
        user: { }
    });
});

app.get('/users', (req, res) => {
    res.status(200).send(users);
});

app.get('/users/:name', (req, res) => {
    const { name } = req.params;
    const user = users.find((user) => user.name === name);
    if (user) res.status(200).send(user);
    else res.status(404).send('Not Found');
});

app.get('/posts', (req, res) => {
    res.status(200).send(posts);
});

app.listen(3000, () => {
    console.log('Server is running on Port 3000');
});