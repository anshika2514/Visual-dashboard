const express = require("express");
const router = express.Router();

const analyticsSchema = require("../model/analytics");

router.route("/all").get(async (req, res) => {
    const data = await analyticsSchema.find({});
    res.status(200).json({data});
});

module.exports = router;