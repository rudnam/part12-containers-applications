const express = require('express');
const { getAsync } = require('../redis');
const router = express.Router();

/* GET statistics */
router.get('/', async (_, res) => {
  const currentAddedTodoCount = await getAsync('addedTodoCount') || 0;
  res.send({
    "added_todos": parseInt(currentAddedTodoCount)
  });
});

module.exports = router;
