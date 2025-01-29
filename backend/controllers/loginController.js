const { User } = require("../models/userModel.js");
const bcrypt = require("bcryptjs");

const loginController = async (req, res) => {
    try {
        const { error } = req.body;
        if (error) {
            return res.status(400).json({ message: error });
        }

        const user = await User.findOne({ email: req.body.email });
        if (!user) {
            return res.status(400).json({ message: "User not found" });
        }

        const validPassword = await bcrypt.compare(req.body.password, user.password);
        if (!validPassword) {
            return res.status(400).json({ message: "Invalid password" });
        }

        const token = user.generateAuthToken();
        
        return res.status(200).cookie("authToken", token, {
            httpOnly: false, // Prevents access from JS
            domain: "localhost",
            path: "/",
            sameSite: "strict",
            secure: false, // Only true in production
            expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
          }).json({
            message: "User logged in successfully", status: 200,
            role: user.role,
          });
          
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal server error" });
    }
};

module.exports = loginController;
