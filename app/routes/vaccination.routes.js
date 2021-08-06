const controller = require("../controllers/vaccination.controller");

module.exports = function (app) {
  app.get('/points/', controller.getPoint);
  app.get('/points/:id', controller.getPointById);
  app.post('/newPoints/', controller.postPoint);
  app.get('/places/', controller.getPlaces);
  app.get('/places/:id', controller.getPlacesById);
  app.delete('/places/:id', controller.deletePlaces);
  app.post('/newPlaces/', controller.postPlaces);
  app.patch('/places/', controller.patchPlaces);
};
