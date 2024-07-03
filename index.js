const express = require('express');
const app = express();
const port=3000;

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

let courses=[
    {id:1, name:'course1'},
    {id:2, name:'course2'},
    {id:3, name:'course3'}
]

app.get('/courses', (req, res) => {
    res.json(courses);
});
