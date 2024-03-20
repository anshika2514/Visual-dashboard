require("dotenv").config()
const express = require("express");
const app = express();
const cors = require('cors');
const connectDB = require("./db/connect");
const analytics = require("./routes/analytics")

const PORT  = process.env.PORT;

app.use(cors());

app.get ("/health-check", (req, res) => {
    res.send("APP IS RUNNING...");
});

// register APIs
app.use("/api/analytics", analytics);

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
    } catch (error) {
        console.log(error);
    }
}

start();