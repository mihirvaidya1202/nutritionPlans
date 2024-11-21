const Counter = require("../models/counter");

async function getNextSequence(name) {
  try {
    let counter = await Counter.findOne({ _id: name });

    if (!counter) {
      counter = new Counter({
        _id: name,
        seq: 1
      });
      await counter.save();
    } else {
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
