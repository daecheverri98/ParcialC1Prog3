const mongoose = require("mongoose");
const productSchema = mongoose.Schema({
    trademark: {
        type: String,
        require: true,
    },
    model: {
        type: String,
        require: true,
    },
    features: {
        type: Object,
        require: true,
        license: {
            name: String,
            require: true,
        },
        color: {
            type: Array,
            require: true,
        },
    },
    ref: {
        type: Object,
        require: true,
        serial: {
            type: Object,
            require: true,
            chassis: {
                type: String,
                require: true,
            },
            motor: {
                type: Number,
                require: true,
            },
        },
        tires: {
            type: String,
            require: true,
        },
    },
});

module.exports = mongoose.model('ProductCollection', productSchema);