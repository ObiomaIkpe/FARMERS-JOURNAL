import User from "../models/user.model"
import jwt from 'jsonwebtoken'



export const signup = async (req, res) => {
    

    const newUser = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    })

    res.status(201).json({
        message: newUser
    })
}

export const signin = async (req, res, next) => {
    const {email, password} = req.body
}