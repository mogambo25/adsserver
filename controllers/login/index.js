var express = require('express')
  , router = express.Router()
var sequelize = require('../../storage/index').sequelize;

router.get('/', (req, res) => {
  sequelize
  .authenticate()
  .then(() => {
    res.send('Connection has been established successfully.');
  })
  .catch(err => {
    res.send('Unable to connect to the database:' + err);
  });
})

module.exports = router