const { Schema, models } = require('mongoose');

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

const Bills = models("bills", billsSchema)

module.exports = billsSchema