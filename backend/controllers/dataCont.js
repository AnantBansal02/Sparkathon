
const Supplier = require("../models/table");

const getData = async(req, res) => {
    try{
        const suppliers = await Supplier.find({}).select('-password');
        res.status(200).json(suppliers);
    }
    catch (error) {
        res.status(500).json("Internal Server Error");
    }
};

module.exports = { getData };