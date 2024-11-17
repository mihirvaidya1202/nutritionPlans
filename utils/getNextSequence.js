const Counter = require("../models/counter");

async function getNextSequence(name) {
  try {
    let counter = await Counter.findOne({ _id: name });

    // If the counter doesn't exist, create a new one
    if (!counter) {
      counter = new Counter({
        _id: name,   // Make sure _id is used, not 'id'
        seq: 1
      });
      await counter.save();
    } else {
      // If the counter exists, increment the seq value
      counter.seq++;
      await counter.save();
    }

    return counter.seq;
  } catch (error) {
    console.error("Error initializing counter:", error);
    throw new Error("Error initializing counter");
  }
}

module.exports = getNextSequence;
