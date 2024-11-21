const MealPlan = require('../models/mealPlan');
const getNextSequence = require('../utils/getNextSequence');

exports.createMealPlan = async (req, res) => {
  try {
    const planId = await getNextSequence("meal_plan_id");

    const mealPlan = new MealPlan({
      plan_id: planId,
      name: req.body.name,
      description: req.body.description,
      calories: req.body.calories,
      protein: req.body.protein,
      carbs: req.body.carbs,
      fat: req.body.fat,
      fitness_goals: req.body.fitness_goals,
    });

    const savedPlan = await mealPlan.save();
    res.status(201).json(savedPlan);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getAllMealPlans = async (req, res) => {
  try {
    const mealPlans = await MealPlan.find();
    res.json(mealPlans);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getMealPlanById = async (req, res) => {
  try {
    const mealPlan = await MealPlan.findOne({ plan_id: req.params.plan_id });
    if (!mealPlan) {
      return res.status(404).json({ message: 'Meal plan not found' });
    }
    res.json(mealPlan);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getMealPlansByMultipleGoals = async (req, res) => {
    try {
      const { goals } = req.query;
  
      if (!goals || goals.length === 0) {
        return res.status(400).json({ message: 'No fitness goals provided.' });
      }
  
      const mealPlans = await MealPlan.find({ fitness_goals: { $in: goals } });
  
      if (mealPlans.length === 0) {
        return res.status(404).json({ message: 'No meal plans found for the provided fitness goals.' });
      }
  
      res.json(mealPlans);
    } catch (error) {
      console.error('Error fetching meal plans:', error.message);
      res.status(500).json({ message: error.message });
    }
};
  
