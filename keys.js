const dotenv = require('dotenv');

dotenv.config();

module.exports = {
    mongoUrl: process.env.mongoURL,
    jwtKey: process.env.jwtKEY
};
