const { Router } = require('express');
const TutorController = require('./controllers/TutorController');
const SearchController = require('./controllers/SearchController');

const routes = Router();

routes.get('/tutors', TutorController.index);
routes.post('/tutors', TutorController.store);
routes.put('/tutors/:id', TutorController.update);
routes.delete('/tutors/:id', TutorController.destroy);

routes.get('/search', SearchController.index);

module.exports = routes;
