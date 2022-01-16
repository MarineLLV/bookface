// Protecting routes

const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
        // send authorization headers from the frontend
        if (!req.headers.authorization) {
            return res.status(401).send('Unauthorized');
        }

        // Verify the token
        const { userId } = jwt.verify(req.headers.authorizatio, process.env.jwtSecret)

        // adding the userId on the request object
        req.userId = userId;
        next();



    } catch (error) {
        console.log(error);
        return res.status(401).send('Unauthorized');
    }
}