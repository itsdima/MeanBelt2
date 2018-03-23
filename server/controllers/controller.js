const mongoose = require('mongoose');
mongoose.Promise = global.Promise; 
const Pet = mongoose.model('Pet');
mongoose.connect('mongodb://localhost/Pet');

module.exports = {
    addPet: (req, res) => {
        var newPet = new Pet(req.body);
        newPet.save((err)=>{
            if(err){
                console.log('didnt work')
                res.json(err);
            }
            else{
                console.log('succesfully added pet');
                res.json({success: 'Successful add'});
            }
        })
    },

    getAll: (req, res) => {
        Pet.find({}, null, {sort: {type: 1}}, (err, all)=>{
            if(err){ console.log(err)}
            else{
                res.json(all);
            }
        });
    },

    getOne: (req, res) => {
        Pet.find({_id: req.params.id}, (err, pet)=>{
            if(err){
                console.log(err)
            }
            else{
                res.json(pet);
            }
        });
    }, 

    update: (req, res) => {
        Pet.update({_id: req.params.id}, req.body[0], {runValidators: true}, (err, data) =>{
            if(err){
                res.json(err);
            }
            else{
                res.json({success: 'successful update'});
            }
        });
    }, 

    remove: (req, res) =>{
        console.log('removing pet');
        Pet.remove({_id: req.params.id}, (err) => {
            if(err){console.log(err)}
            else{
                console.log('removed');
                res.json({success: 'removed'});
            }
        });
    }, 

    like: (req, res) =>{
        Pet.findOne({_id: req.params.id}, (err, pet)=>{
            if(err){console.log(err)}
            else{
                pet.likes += 1; 
                pet.save((err)=>{
                    if(err){console.log(err)}
                    else{
                        res.json({success: 'votes are in'});
                    }
                });
            }
        });
    }
}