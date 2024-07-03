const express = require('express');
const app = express();
const port=3000;
app.use(express.json());

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
app.post('/courses', (req, res) => {
    courses.push({id:courses.length+1, name:req.body.name});
    console.log(req.body);
});
app.put('/courses/:id', (req, res) => {
    const userId=parseInt(req.params.id);
    const course=courses.find(c=>c.id===userId);
    if(course){
        course.name=req.body.name;
        res.json(course);
    }
    else{
        res.status(404).send('The course with the given id was not found');
    }


});
app.delete('/courses/:id', (req, res) => {
    const userId=parseInt(req.params.id);
    const course=courses.find(c=>c.id===userId);
    if(course){
        const index=courses.indexOf(course);
        courses.splice(index,1);
        res.json(course);
    }
    else{
        res.status(404).send('The course with the given id was not found');
    }
    
});
