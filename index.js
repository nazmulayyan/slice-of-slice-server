const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

//chefs
const chefs = require('./data/chefs.json');
//blogs
const blogs = require('./data/blogs.json');

app.use(cors());
app.use(express.json());
//chefs
app.get('/', (req, res) => {
    res.send('chef is coming');
});
//blogs
// app.get('/', (req, res) =>{
//     res.send('blog is coming')
// })

//chefs
app.get('/chefs', (req, res) =>{
    res.send(chefs)
})
app.get('/chefs/:id', (req, res) =>{
    const id = req.params.id
    console.log(id);
    const chef = chefs.chefs.find((c) =>c.id === parseInt(id))

    res.send(chef)
})
//blogs
app.get('/blogs', (req, res) =>{
    res.send(blogs)
})

app.listen(port, () => {
    console.log(`chef api is coming on port: ${port}`);
});

//blogs
// app.listen(port,() =>{
//     console.log(`blogs api is coming on port: ${port}`);
// })
