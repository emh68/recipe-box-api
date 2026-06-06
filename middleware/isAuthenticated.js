const jwt = require('jsonwebtoken');

const checkToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ message: "Access denied. Token missing or malformed." });
    }

    const token = authHeader.split(' ')[1];
    try {
        const verifiedUser = jwt.verify(token, process.env.JWT_SECRET);
        req.user = verifiedUser;
        next();
    } catch (error) {
        res.status(401).json({ message: "Access denied. Invalid or expired token." });
    }
};

module.exports = checkToken;