const { Post } = require('../models');

const postData = [
    {
        title: "Drake's New Album Reach 1 Billions Plays on Spotify!",
        post_content: "Taskinator is a task-tracker app that will allow you to organize your personal to-do list items by clicking and dragging them into categories like To Do, In Progress, and Completed.",
        user_id: 3
    },
    {
        title: "Music Near Me",
        post_content: "A mobile app that will send you notifications whenever a concert is playing in your area.",
        user_id: 1
    },
    {
        title: "The Ultimate Tech Quiz",
        post_content: "A web app that will give users 10 new technical questions each day and track their progress in things like programming, cybersecurity, database architecture, and more!",
        user_id: 4
    },
    {
        title:  "Roll 'Em Up",
        post_content: "A game for Windows and macOS where players move a ball through a series of increasingly challenging mazes.",
        user_id: 2
    },
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;