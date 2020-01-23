const createError = require('http-errors');
const mongoose = require('mongoose');
const Cat = require('../models/CatModel');

module.exports.list = (req, res, next) => {
	Cat.find().then(
		cats => res.json(cats)
	).catch(
		error => res.json(error)
	)
};

module.exports.create = (req, res, next) => {
	Cat.create(req.body).then(
		cat => res.json(cat)
	).catch(
		error => res.json(error)
	)
};