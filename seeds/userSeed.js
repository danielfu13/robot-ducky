const { User } = require('../models');

const userData = [
  {
    username: "Bobby771",
    email: "Bobby@email.com",
    password: "ilikepie"
  },
  {
    username: "ItsShowtime",
    email: "Showtime@gmail.com",
    password: "itsshowtime99"
  },
  {
    username: "Domino1",
    email: "Domino@outlook.com",
    password: 'password123'
  },
  {
    username: "LittoMan",
    email: "LittoMan@gmail.com",
    password: 'password123'
  }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;