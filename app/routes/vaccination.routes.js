const controller = require("../controllers/vaccination.controller");
// point are endpoints in data_vaccination.json
//places are enpoint in MongoDg

const placesSchema = require("../schema/vaccination");
const validate = require('../middleware/validateData');

module.exports = function (app) {
  app.get('/points/', controller.getPoint);
  app.get('/points/:id', controller.getPointById);
  app.post('/newPoints/', controller.postPoint);
  app.get('/places/', controller.getPlaces);
  app.get('/places/:id', controller.getPlacesById);
  app.delete('/places/:id', controller.deletePlaces);
  app.post('/places/',  validate(placesSchema.schema), controller.postPlaces);
  app.patch('/places/:id', validate(placesSchema.schemaPatch), controller.patchPlaces);
};
