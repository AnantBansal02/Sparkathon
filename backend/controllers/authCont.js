const UserMod = require("../models/userMod");
const Supplier = require("../models/table");
const bcrypt = require("bcryptjs"); 
const generateTokenAndSetCookie = require("../utils/genJWT");
const fs = require('fs');
const csv = require('csv-parser');
let counter = 1;
const filePath = 'supplier_ranking_grades.csv'; 

const signup = async (req,res)=>{
    try {
        const {fullName,userName,password,confirmPassword} = req.body;

        if(password !== confirmPassword){
            return res.status(400).json("Password and Confirm Password do not match");
        }

        const user  = await UserMod.findOne({userName});

        if(user){
            return res.status(400).json("Username already exists");
        }
        
        const salt = await bcrypt.genSalt(10);
        const hashedPswd = await bcrypt.hash(password,salt);
        const newUser = new UserMod({
            fullName,
            userName,
            password:hashedPswd
        });
        if (newUser) {
            generateTokenAndSetCookie(newUser._id,res);
            await newUser.save();
            fs.createReadStream(filePath)
                .pipe(csv())
                .on('data', async (row) => {
                    try {
                        if (parseInt(row.username) === counter) {
                            const newSupplier = new Supplier({
                                username: userName,
                                quality: row.quality,
                                quantity: row.quantity,
                                methodsOfPayment: row.methodsOfPayment,
                                serviceability: row.serviceability,
                                reputation: row.reputation,
                                flexibility: row.flexibility,
                                financialCondition: row.financialCondition,
                                assets: row.assets,
                                businessResults: row.businessResults,
                                returns: row.returns,
                                deliveryTime: row.deliveryTime,
                                location: row.location
                            });
                            await newSupplier.save();
                        }
                    } catch (error) {
                        console.error('Error processing row:', row, error);
                    }
                })
                .on('end', () => {
                    console.log('CSV file successfully processed');
                    counter++;
                });
            res.status(201).json({
                _id: newUser._id,
                fullName: newUser.fullName,
                userName: newUser.userName
            });
        } else {
            res.status(400).json("Invalid User data");
        }
        
    } catch (error) {
        res.status(500).json("Internal Server Error");
    }
}
const login = async (req,res)=>{
    try {
        const{userName,password}= req.body;
        const user = await UserMod.findOne({userName});

        if(!user){
            return res.status(400).json("No User Found");
        }

        const validPassword = await bcrypt.compare(password,user.password);

        if(!validPassword){
            return res.status(400).json("Incorrect Password");
        }

        generateTokenAndSetCookie(user._id,res);
        res.status(200).json({
            _id : user._id,
            fullName: user.fullName,
            userName: user.userName
        });
    } catch (error) {
        res.status(500).json("Internal Server Error");
    }
}
const logout = async (req,res)=>{
    try {
        res.cookie("jwt","",{maxAge:0});
        res.status(200).json("Logout Successfull");
    } catch (error) {
        res.status(500).json("Internal Server Error");
    }
}

module.exports = {signup,login,logout};