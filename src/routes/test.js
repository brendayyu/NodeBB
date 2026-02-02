'use strict';

const router = require('express').Router(); // Create a new Express router
const Assert = require('../middleware/assert'); // Your middleware

// /test/assert will trigger Assert.user
router.get('/test/assert', Assert.user, (req, res) => {
	res.send('Middleware executed successfully!');
});

// Export the router so NodeBB can use it
module.exports = router;