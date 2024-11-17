const express = require('express');
const router = express.Router();
const mealPlanController = require('../controllers/mealPlannerController');

router.post('/meal-plans', mealPlanController.createMealPlan);

router.get('/meal-plans', mealPlanController.getAllMealPlans);

router.get('/meal-plans/goals', mealPlanController.getMealPlansByMultipleGoals);

router.get('/meal-plans/:plan_id', mealPlanController.getMealPlanById);

module.exports = router;
