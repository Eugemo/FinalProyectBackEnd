// const mongoose = require('mongoose');
const points = require('../data_vaccination.json');
const pointSchema = require('../models/vaccination.models')

async function getPoint (req, res) {
  await res.status(200).json(points.vaccination);
}

async function getPointById(req, res){
  const id = req.params.pointSchemaId;
}

async function postPoint(req, res) {

  let point = new pointSchema(
    {   
    //   _id: mongoose.Types.ObjectId,
      name: req.body.name,
      address: req.body.address,
      latitude: req.body.latitude,
      longitude: req.body.longitude,
      url: req.body.url,
    }
  )

  point.save()
  .then(result => {
      console.log(result);
  })
  .catch (err => console.log(err));
  res.status(200).json({message: 'Add Point Succesfully', createdPoint: point})
  
}


module.exports = { getPoint, getPointById ,postPoint };