const mongoose = requires ("mongoose")
const Schema = mongoose.Schema

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    pasword: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    }, 
    address: {
        street: {
            type: String,
            required: true 
        },
        city: {
            type: String,
            required: true 
        },
        state: {
            type: String,
            required: true 
        },
        zip: {
            type: Number,
            required: true,
            minLength: 5 
        },
    },
    orders: [{
        type: Schema.Types.ObjectId,
        ref: 'Orders'
    }]
})



modules.export = mongoose.model("User", userSchema)