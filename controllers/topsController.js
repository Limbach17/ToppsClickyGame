const db = require("../models");

module.exports = {
    findAll: function(req, res) {
        db.Topps
            .find(req.query)
            .sort({name: -1})
            .then(dbTopps => res.json(dbTopps))
            .catch(err => res.status(422).json(err));
    },

    findById: function(req, res) {
        db.Topps
            .findById(req.params.id)
            .then(dbTopps => res.json(dbTopps))
            .catch(err => res.status(422).json(err));
    }
};