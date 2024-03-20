const mongoose = require("mongoose");

const connectDB = (uri) => {
    return mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("DB CONNECTED !!"))
    .catch(err => console.log("DB ERROR!", err))
};

module.exports = connectDB;