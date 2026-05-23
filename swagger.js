const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'Recipe Box API',
        description: 'Recipe Box API Documentation',
    },
    host: 'recipe-box-api-uom5.onrender.com',
    schemes: ['https', 'http'],
    definitions: {
        Recipe: {
            recipeName: "Classic Homemade Lasagna",
            imageUrl: "https://example.com/images/lasagna.jpg",
            difficultyLevel: "Medium",
            cuisineType: "Italian",
            dietType: "Omnivore",
            allergens: ["Gluten", "Dairy"],
            mealType: "Dinner",
            prepTimeMinutes: 30,
            cookTimeMinutes: 60,
            totalTimeMinutes: 90,
            servings: 8,
            caloriesPerServing: 450,
            instructions: [
                "Boil the lasagna noodles according to package instructions.",
                "Brown the ground beef and add tomato sauce with herbs."
            ],
            ingredientList: [
                "12 lasagna noodles",
                "1 lb ground beef"
            ]
        },
        Ingredient: {
            ingredientName: "Whole Milk Ricotta Cheese",
            category: "Dairy & Eggs",
            caloriesPerUnit: 110,
            servingUnit: "1/4 cup (62g)",
            estimatedPrice: 4.99,
            allergens: ["Dairy"],
            storageType: "Refrigerator",
            proteinGrams: 7,
            fatGrams: 8,
            carbsGrams: 3
        }
    }
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);