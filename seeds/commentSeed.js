const { Comment } = require('../models');

const commentData = [
    {
      comment_text: "Testing, testing, I'm just suggesting. You and I might not be the best thing",
      user_id: 2,
      post_id: 1
    },
    {
      comment_text: "Exit, exit, somehow I guessed it right, right. But I still want ya, want ya, don't mean to taunt ya",
      user_id: 1,
      post_id: 1
    },
    {
      comment_text: "If you leave now, I'll come back and haunt ya. You'll remember, return to sender now",
      user_id: 2,
      post_id: 1
    },
    {
      comment_text: "Well, I just wish we could go back one more time and begin it. Back before I lost myself somewhere, somewhere in it",
      user_id: 3,
      post_id: 2
    }
  ]

  const seedComments = () => Comment.bulkCreate(commentData);

  module.exports = seedComments;