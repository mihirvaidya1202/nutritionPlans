const mongoose = require('mongoose');

const mealPlanSchema = new mongoose.Schema({
  plan_id: { type: Number, unique: true, required: true },
  name: { type: String, required: true },
  description: { type: String },
  calories: { type: Number, required: true },
  protein: { type: Number, required: true },
  carbs: { type: Number, required: true },
  fat: { type: Number, required: true },
  fitness_goals: { type: [String] },
}, { timestamps: true });

module.exports = mongoose.model('MealPlan', mealPlanSchema);
