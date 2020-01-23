const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BREEDS = ['tabby', 'calico', 'siamese', 'persian', 'sphynx', 'maine coon', 'other'];

const catSchema = new Schema({
	name: { type: String, required: true },
	color: String,
	breed: { type: String, enum: BREEDS },
	height: Number,
	weight: Number,
	birthplace: String
}, {
	timestamps: true,
	toJSON: {
		transform: (doc, ret) => {
			ret.id = doc._id;
			delete ret._id;
			delete ret.__v;
			return ret;
		}
	}
});

const Cat = mongoose.model('Cat', catSchema);

module.exports = Cat;