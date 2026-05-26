const { ObjectId } = require('mongodb');
const mongodb = require('../db/connect');


const getAllRecipes = async (req, res, next) => {
    try {
        const db = mongodb.getDb();
        const recipes = await db.collection('recipes').find().toArray();
        res.json(recipes)
    } catch (error) {
        next(error);
    }
};

const getSingleRecipe = async (req, res, next) => {
    try {
        const db = mongodb.getDb();
        const recipe = await db.collection('recipes').findOne({ _id: new ObjectId(req.params.id) });

        if (!recipe) {
            return res.status(404).json({ message: "No Recipe found." });
        }

        return res.json(recipe)
    } catch (error) {
        next(error);
    }
};

const createRecipe = async (req, res, next) => {
    try {
        const db = mongodb.getDb();
        const {
            recipeName,
            imageUrl,
            difficultyLevel,
            cuisineType,
            dietType,
            allergens,
            mealType,
            prepTimeMinutes,
            cookTimeMinutes,
            totalTimeMinutes,
            servings,
            caloriesPerServing,
            instructions,
            ingredientList
        } = req.body;

        const newRecipe = {
            recipeName,
            imageUrl: imageUrl || null,
            difficultyLevel: difficultyLevel || "not specified",
            cuisineType: cuisineType || "unknown",
            dietType: dietType || "unkown",
            allergens: allergens || "none",
            mealType: mealType || "unkown",
            prepTimeMinutes: prepTimeMinutes || null,
            cookTimeMinutes: cookTimeMinutes || null,
            totalTimeMinutes: totalTimeMinutes || null,
            servings,
            caloriesPerServing: caloriesPerServing || null,
            instructions,
            ingredientList
        };

        const result = await db.collection('recipes').insertOne(newRecipe);

        if (result.acknowledged) {
            res.status(201).json({ insertedId: result.insertedId });
        }
        else {
            res.status(500).json({ message: "An error occurred while creating the new recipe." })
        }
    } catch (error) {
        next(error);
    }
};

const updateRecipe = async (req, res, next) => {
    try {
        const db = mongodb.getDb();
        const {
            recipeName,
            imageUrl,
            difficultyLevel,
            cuisineType,
            dietType,
            allergens,
            mealType,
            prepTimeMinutes,
            cookTimeMinutes,
            totalTimeMinutes,
            servings,
            caloriesPerServing,
            instructions,
            ingredientList
        } = req.body;

        const recipe = await db.collection('recipes').updateOne({ _id: new ObjectId(req.params.id) }, {
            $set: {
                recipeName,
                imageUrl,
                difficultyLevel,
                cuisineType,
                dietType,
                allergens,
                mealType,
                prepTimeMinutes,
                cookTimeMinutes,
                totalTimeMinutes,
                servings,
                caloriesPerServing,
                instructions,
                ingredientList
            }
        });
        if (recipe.matchedCount === 0) {
            return res.status(404).json({ message: "Recipe not found. No update occurred." })
        }
        res.status(200).json({ message: "Recipe successfully updated." })
    } catch (error) {
        next(error);
    }
};

const deleteRecipe = async (req, res, next) => {
    try {
        const db = mongodb.getDb();
        const recipe = await db.collection('recipes').deleteOne({ _id: new ObjectId(req.params.id) });

        if (recipe.deletedCount === 0) {
            return res.status(404).json({ message: "Recipe not found. Nothing was deleted." });
        }
        return res.status(200).json({ message: "Recipe successfully deleted." });
    } catch (error) {
        next(error);
    }
};

module.exports = { getAllRecipes, getSingleRecipe, createRecipe, updateRecipe, deleteRecipe };