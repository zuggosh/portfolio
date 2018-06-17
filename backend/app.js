const express = require('express');

const app = express();

app.use('/api/post',(req, res, next)=>{
    const post = {
      name: 'Yakov Limansiy'
    };
    res.json({
        message: 'Post get successfully',
        post: post
    })
});

module.exports = app;
