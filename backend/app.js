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

app.use('/api/post',(req, res)=>{
    const post = {
        image: 'assets/img/myPhoto.jpg',
        paragraphs: [
            {
                title: 'Hello world',
                description: 'My name - Limanskiy Yakov.\n' +
                'And i am Frond-end developer\n' +
                '\n' +
                'Short representation my self:\n' +
                'I born in Ukraine, Mariupol city in 1989. Finish middle-school in 2006, in this year entered the University - PRYAZOVSKYI STATE TECHNICAL UNIVERSITY - Faculty of metallurgy (State Higher Educational Institution of III-IV Accreditation Level. Founded in 1930). It is one of the oldest in the university and is rich with traditions and training experience.'
            },
            {
                title: 'Skills',
                list: [
                    'HTML5',
                    'CSS3',
                    'JS',
                    'Git',
                    'PHP',
                    'Project builder'
                ]
            },
            {
                title: 'Work carrier and experience'
            },
            {
                title: 'Knowledge of English',
                description: 'At the level of reading technical documentation (Intermediate)'
            },
            {
                title: 'This project',
                description: 'When i started this project planed only how training last angular version (at that moment last Angular have number 6 :) ), but very soon i understand opportunities creating platform. And i don\'t have good introduction my self in internet, so that project transformate in site-portfolio.'
            }
    ]};
    res.status(200).json({
        message: 'Post get successfully',
        post: post
    })
});

module.exports = app;
