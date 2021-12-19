const express = require('express');
const router = express.Router();

let { people } = require('../data');
let { getPeople, createPerson, createPersonPostman, updatePerson, deletePerson } = require('../controllers/people');

router.route('/')
    .get(getPeople)
    .post(createPerson);

router.route('/:id')
    .put(updatePerson)
    .delete(deletePerson);

router.post('/postman', createPersonPostman);

module.exports = router;