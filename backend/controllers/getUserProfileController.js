const profileController = async (req, res) => {
    const token = req.cookies?.authToken;
    
    if (token) {
        jwt.verify(token, process.env.JWTPRIVATEKEY, {}, async (err, userData) => {
            if (err) {
                console.error("JWT Verification Error:", err);
                return res.status(401).json({ message: "Invalid token" });
            }
    
            const user = await User.findOne({ _id: userData._id });
            if (!user) {
                return res.status(404).json({ message: "User not found" });
            }
    
            // Send only necessary user data, like first name
            res.json({
                firstName: user.firstName, // Assuming firstName is a field in your user schema
            });
        });
    } else {
        res.status(401).json({ message: "No token provided" });
    }
};

module.exports = profileController;
