const { Schema, model } = require('mongoose');

const billsSchema = new Schema({
    total: {
        type: Number,
        percision: 2,
        required: true,
    },
    duedate: {
        type: Date,
        require: true,
    }
},
    {
        timestamps: true
    });

const Bills = model("Bills", billsSchema)

module.exports = Bills;