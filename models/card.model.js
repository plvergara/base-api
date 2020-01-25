const mongoose = require("mongoose")
const LABELS = ['Learning Unit', 'Kata', 'Example', 'Lab', 'Done!', 'Review', 'Bonus'];

const cardSchema = new mongoose.Schema (
    {
        title: {type: String, required: true},
        description: {type: String, required: true},
        label:[{type: String, required: true, enum: LABELS}],
        column:{type: mongoose.Schema.Types.ObjectId, ref:'Column', required:true},
        position: {type: Number, required: true}
    },
    {
        timestamps:true,
        toJSON:{
            transform: (doc,ret) => {
                ret.id = doc._id
                delete ret._id
                delete ret.__v
                return ret
            }
        }
    }
)

const Card = new mongoose.model('Card', cardSchema)
module.export = Card