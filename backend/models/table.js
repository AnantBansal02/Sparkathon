const mongoose = require("mongoose");
const supplierSchema  = new mongoose.Schema({
    username: { type: String, unique: true },
    quality: String,
    quantity: String,
    methodsOfPayment: String,
    serviceability: String,
    reputation: String,
    flexibility: String,
    financialCondition: String,
    assets: String,
    businessResults: String,
    returns: String,
    deliveryTime: String,
    location: String
},
{timestamps:true}
);
const Supplier = mongoose.model('Supplier', supplierSchema);
module.exports = Supplier;