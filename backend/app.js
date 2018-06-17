const express = require('express');

const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
        'Access-Control-Allow-Header',
        'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.setHeader(
        'Access-Control-Allow-Methods',
        'GET, POST, DELETE, OPTIONS'
    );
    next();
});

app.use('/api/post',(req, res, next)=>{
    const post = {
      name: 'Yakov Limansiy'
    };
    res.status(200).json({
        message: 'Post get successfully',
        post: post
    })
});

module.exports = app;
