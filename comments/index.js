const express = require('express');
const bodyParser = require('body-parser');
const { randomBytes } = require('crypto');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const commentsByPostsID = {}

app.get('/posts/:id/comments', (req,res)=>{
    return res.send(commentsByPostsID[req.params.id] || []);
});

app.post('/posts/:id/comments', (req,res)=>{
    const commentID = randomBytes(4).toString('hex');
    const { content } = req.body;

    const comments = commentsByPostsID[req.params.id] || [];
    comments.push({
        id:commentID,
        content
    })
    commentsByPostsID[req.params.id] = comments;

    return res.status(201).send(comments);
});


app.listen(4001, ()=>{
    console.log('4001 listening');
})
