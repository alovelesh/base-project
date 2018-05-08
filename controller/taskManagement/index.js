var router = require('express').Router();

router.use('/', require('./crud-apis'));

module.exports = router;