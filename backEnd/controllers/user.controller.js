const User = require("../models/user.model.js");

const register = async (req, res, next) => {
    const {cropname,
    croptype,
    email,
    fullname,
    location,
    phonenumber,
    soilhumidity,
    soilph,
    soiltemperature} = req.body;


        try {
            const newFarmer = await User.create({
                fullname, 
                email,
                phonenumber,
                location,
                cropname,
                croptype,
                soilph,
                soiltemperature,
                soilhumidity});
                res.status(201).json(newFarmer);
                console.log(newFarmer)

        } catch (error) {
            console.log(error)
            res.status(400).json({message: error})
        }
}

module.exports = register;