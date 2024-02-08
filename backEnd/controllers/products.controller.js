import User from "../models/user.model";

export const getProducts = async (req, res) => {
   const { email } = req.user.email;

   const user = await User.findOneByEmail()
}