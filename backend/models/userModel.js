const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity");

const userSchema = new mongoose.Schema(
    {
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        email: { type: String, required: true },
        password: { type: String, required: true },
        avatarLink: { type: String },
        role: { type: String, default: "user" },
    },
    { timestamps: true }
);

userSchema.methods.generateAuthToken = function () {
    const token = jwt.sign(
        {
            _id: this._id,
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            role: this.role, // Include role in the token payload
        },
        process.env.JWTPRIVATEKEY,
        { expiresIn: "7d" }
    );
    return token;
};

const User = mongoose.model("user", userSchema);

const validateRegister = (data) => {
    const schema = Joi.object({
        firstName: Joi.string().required().label("First Name"),
        lastName: Joi.string().required().label("Last Name"),
        email: Joi.string().email().required().label("Email"),
        password: passwordComplexity().required().label("Password"),
        role: Joi.string()
            .valid("user", "admin") // Acceptable roles
            .optional() // Optional since there's a default
            .label("Role"),
    });
    return schema.validate(data);
};

const validateLogin = (data) => {
    const schema = Joi.object({
        email: Joi.string().email().required().label("Email"),
        password: passwordComplexity().required().label("Password"),
        role: Joi.string()
            .valid("user", "admin") // Validate the role if provided
            .optional()
            .label("Role"),
    });
    return schema.validate(data);
};

module.exports = { User, validateRegister, validateLogin };
