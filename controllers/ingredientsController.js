const { ObjectId } = require('mongodb');
const mongodb = require('../db/connect');


const getAllIngredients = async (req, res, next) => {
    try {
        const db = mongodb.getDb();
        const ingredients = await db.collection('ingredients').find().toArray();
        res.json(ingredients);
    } catch (error) {
        next(error);
    }
};
const getSingleIngredient = async (req, res, next) => {
    try {
        const db = mongodb.getDb();
        const ingredient = await db.collection('ingredients').findOne({ _id: new ObjectId(req.params.id) });

        if (!ingredient) {
            return res.status(404).json({ message: "Ingredient not found." });
        }

        return res.json(ingredient)
    } catch (error) {
        next(error);
    }
};

const createIngredient = async (req, res, next) => {
    try {
        const db = mongodb.getDb();
        const {
            ingredientName,
            category,
            caloriesPerUnit,
            servingUnit,
            estimatedPrice,
            allergens,
            storageType,
            proteinGrams,
            fatGrams,
            carbsGrams
        } = req.body;

        if (!ingredientName || !category || !servingUnit) {
            return res.status(400).json({ message: "Ingredient name, category, and serving unit are required." });
        }

        const newIngredient = {
            ingredientName,
            category,
            caloriesPerUnit: caloriesPerUnit || null,
            servingUnit: servingUnit || null,
            estimatedPrice: estimatedPrice || null,
            allergens: allergens || [],
            storageType: storageType || "not specified",
            proteinGrams: proteinGrams || null,
            fatGrams: fatGrams || null,
            carbsGrams: carbsGrams || null
        };

        const result = await db.collection('ingredients').insertOne(newIngredient);

        if (result.acknowledged) {
            res.status(201).json({ insertedId: result.insertedId });
        } else {
            res.status(500).json({ message: "An error occurred while creating the ingredient entry." });
        }
    } catch (error) {
        next(error);
    }
};

const updateIngredient = async (req, res, next) => {
    try {
        const db = mongodb.getDb();
        const {
            ingredientName,
            category,
            caloriesPerUnit,
            servingUnit,
            estimatedPrice,
            allergens,
            storageType,
            proteinGrams,
            fatGrams,
            carbsGrams
        } = req.body;

        const ingredient = await db.collection('ingredients').updateOne({ _id: new ObjectId(req.params.id) }, {
            $set: {
                ingredientName,
                category,
                caloriesPerUnit,
                servingUnit,
                estimatedPrice,
                allergens,
                storageType,
                proteinGrams,
                fatGrams,
                carbsGrams
            }
        });

        if (ingredient.matchedCount === 0) {
            return res.status(404).json({ message: "Ingredient not found. No update occurred." })
        }
        res.status(200).json({ message: "Ingredient successfully updated." })
    } catch (error) {
        next(error);
    }
};

const deleteIngredient = async (req, res, next) => {
    try {
        const db = mongodb.getDb();
        const ingredient = await db.collection('ingredients').deleteOne({ _id: new ObjectId(req.params.id) })

        if (ingredient.deletedCount === 0) {
            return res.status(404).json({ message: "Ingredient not found. Nothing was deleted." })
        }
        return res.status(200).json({ message: "Ingredient successfully deleted." });
    } catch (error) {
        next(error);
    }
};

module.exports = { getAllIngredients, getSingleIngredient, createIngredient, updateIngredient, deleteIngredient };