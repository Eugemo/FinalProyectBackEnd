const points = require('../data_vaccination.json');
const pointSchema = require('../models/vaccination.models');

async function getPoint (req, res) {
  await res.status(200).json(points.vaccination);
}

async function getPointById(req, res){
  const id = req.params.pointSchemaId;
}

async function postPoint(req, res) {

  let point = new pointSchema(
    {      
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
async function getPlaces (req, res) {    
    let docs = await pointSchema.find()
    .catch(err => console.log(err));
    res.status(200).json(docs);    
}

async function getPlacesById (req, res) {    
    let docs = await pointSchema.findById(req.params.id)
    .catch(err => console.log(err));
    res.status(200).json(docs);    
}

async function deletePlaces (req, res) {   
    const id = req.params.id     
    let docs = await pointSchema.deleteOne({_id:id})    
    .catch(err => console.log(err));
    res.status(200).json(docs);    
}

async function postPlaces(req, res) {

    let point = new pointSchema(
      {
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
    res.status(200).json({message: 'Add Place Succesfully', createdPoint: point})
    
}
  async function patchPlaces (req, res) {    
    const id= req.params.id    
    let docs = await pointSchema.updateOne({_id:id}, req.body)
    .catch(err => console.log(err));
    res.status(200).json(docs);       
  }

module.exports = { getPoint, getPointById ,postPoint, getPlaces, getPlacesById, deletePlaces, postPlaces, patchPlaces };