const Cat = require('../models/CatModel');
const createError = require('http-errors');

module.exports.list = (req, res, next) => {
	Cat.find().then(
		cats => res.json(cats)
	).catch(next);
};

module.exports.detail = (req, res, next) => {
	Cat.findById(req.params.id).then(
		cat => {
			if (!cat) {
				throw createError(404, 'Cat not found');
			} else {
				res.json(cat);
			}
		}
	).catch(next);
};

module.exports.create = (req, res, next) => {
	const cat = new Cat(req.body);
	cat.save().then(
		cat => res.status(201).json(cat)
	).catch(next);
};