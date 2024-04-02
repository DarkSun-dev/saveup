const Mentoria = require('./../models/monitoriaModel')
const Entidade = require('./../models/entidadeModel')
const factory = require('./handlerFactory');
const Alert = require('../models/alertModel');

const accountSid = 'ACd832e0d54a272a09df9524e02f11c411'; 
const authToken = 'bd8dca17c0f369842ffc04f588388901' 
const client = require('twilio')(accountSid, authToken); 

exports.mentoriaStatus = async (req, res) => {}

exports.criarEntidade = factory.createOne(Entidade)
exports.getEntidade = factory.getAll(Entidade)
exports.getAlert = factory.getAll(Alert)
exports.emitAlert = async (req, res) => {

    var x = []
    for (let index = 0; index < req.body.entidades.length; index++) {
        x.push(await Entidade.findOne({nome: req.body.entidades[index]}))
    }
    
    console.log(req.body);

    const doc = await Alert.create(req.body)
 /*
client.messages 
      .create({ 
         body: `Pedido de socoro`,  
         messagingServiceSid: 'MGc04241ed664660844e3372689282b59f',      
         to: '+258845137534' 
       }) 
      .then(message => console.log(message)) 
*/
    res.send({status: 'oky'})
}
