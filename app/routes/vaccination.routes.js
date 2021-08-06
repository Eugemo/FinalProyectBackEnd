const controller = require("../controllers/vaccination.controller");

module.exports = function (app) {
  app.get('/points/', controller.getPoint);
  app.get('/points/:id', controller.getPointById);
  app.post('/newPoints/', controller.postPoint);
};
