const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ordersSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
})