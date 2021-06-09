const db      = require('../models');
const Data  = db.Data;

//create and Save a new Serial Tag
exports.create=(req,res)=>{

const serial = new Serial({
        tag_name     : req.body.tag_name ,
        device_id    : req.body.device_id,
        device_name  : req.body.device_name,
	    tag_type     : req.body.tag_type,
	    start_add    : req.body.start_add,
	    qty          : req.body.qty,
	    table_name   : req.body.table_name
});
	//Save The Serial TagName
	serial
	.save(serial)
	.then(data=>{
		res.send(data);
	})
	.catch(err=>{
		res.status(500).send({
			message:
			err.message || "Some error occurred while creating the SerialTag."
		});
	});

};

//Retrive all Serial Tags from database
exports.findAll=(req,res)=>{
const device_id=req.query.device_id;
var condition =device_id ? { device_id: { $regex: new RegExp(device_id), $options: "i" } } : {};
Serial.find(condition)
.then(data=>{
	res.send(data);
})
.catch(err=>{
res.status(500).send({
	message:err.message || "Some error occurred while retrieving setialtags."
});
});
};

//Find a Single Serial Tag from database
exports.findOne=(req,res)=>{
  const id = req.params.id;

  Serial.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Serail Tags with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Serail Tags with id=" + id });
    });
};

//Update Serial Tag
exports.update=(req,res)=>{

};
//Delete Serial Tags
exports.delete=(req,res)=>{

};

//Delete Serial Tags
exports.deleteAll=(req,res)=>{
	
}

