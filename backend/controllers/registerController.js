const Token = require("../models/tokenModel.js");
const { validateRegister, User } = require("../models/userModel.js");
const bcrypt = require("bcryptjs");
const crypto = require("crypto");

const RegisterController = async (req, res) => {
    try {
        // Validate the incoming registration data
        const { error } = validateRegister(req.body);
        if (error) {
            return res.status(400).send({ message: error.details[0].message });
        }

        // Check if the user already exists
        let user = await User.findOne({ email: req.body.email });
        if (user) {
            return res.status(400).send({ message: "User already registered" });
        }

        // Hash the password before saving
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        // Create a new user with the role included
        user = new User({
            ...req.body,
            password: hashedPassword,
            role: req.body.role || "user", // Default role is "user" if not provided
        });

        // Save the user to the database
        await user.save();
        const token = new Token({
            userId: user._id,

            token: crypto.randomBytes(16).toString("hex"),
            createdAt: Date.now(),
            expiresAt: Date.now() + 3600000, // 1 hour expiration
          });
          await token.save();

        return res.status(200).json({
            message: "User registered successfully",
            role: user.role, // Include the role in the response
        });
    } catch (error) {
        console.error("Error in RegisterController", error);
        res.status(500).send({ message: "Internal Server Error" });
    }
};

module.exports = RegisterController;
