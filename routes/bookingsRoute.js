const express = require("express");
const router = express.Router();
const Booking = require("../models/booking");

router.post("/bookroom", async (req, res) => {
    const { room, fromdate, todate, totalamount, totaldays } = req.body;

    // Validate required fields
    if (!room || !fromdate || !todate || !totalamount || !totaldays) {
        return res.status(400).json({ error: "Missing required fields" });
    }

    try {
        console.log("Creating new booking...");
        const newbooking = new Booking({
          room: room.name,
          roomid: room._id,
          fromdate,
          todate,
          totalamount,
          totaldays,
          transactionId: "1234",
        });
      
        console.log("Saving new booking...");
        const booking = await newbooking.save();
      
        console.log("Booking saved successfully!");
        return res.send("Room booked successfully");
      } catch (error) {
        console.error("Error while booking room: ", error);
        return res.status(400).json({ error: "Something went wrong" });
      }
      
});

module.exports = router;
