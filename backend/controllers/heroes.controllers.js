const heroesModel = require('../models/heroes.model');

const heroesCtrl = {

    getHeroes(req,res){
        heroesModel.find()
        .then(req => res.json(req))
        .catch(err => res.json(err));
    },

    postHeroes(req, res){
        const newHeroe = new heroesModel(req.body);
        newHeroe.save();
        console.log("req.body: ",req.body);
        res.json("recived");
    },

    getHeroe(req,res){
        heroesModel.findById(req.params.id)
        .then(req => res.json(req))
        .catch(err => res.json(err));
        console.log(req.params);
    }

    // async getHeroes(req,res){
    //     const heroes = await heroesModel.find();
    //     res.json(heroes);
    // }

};

module.exports = heroesCtrl;