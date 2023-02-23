function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}
const breakfastImgs = importAll(require.context('./images/breakfast', false, /\.(png|jpe?g|svg)$/));
const lunchImgs = importAll(require.context('./images/lunch', false, /\.(png|jpe?g|svg)$/));
const dinnerImgs = importAll(require.context('./images/dinner', false, /\.(png|jpe?g|svg)$/));

const foodData = [
    {
        id: 1,
        name: "Bagel and Cream Cheese",
        description: "Best tasty food that you can find in town",
        price: 10,
        img: breakfastImgs["breakfast1.png"],
        category: "breakfast"
    },
    {
        id: 2,
        name: "Breakfast Sandwich",
        description: "Best tasty food that you can find in town",
        price: 10,
        img: breakfastImgs["breakfast2.png"],
        category: "breakfast"
    },
    {
        id: 3,
        name: "Baked Chicken",
        description: "Best tasty food that you can find in town",
        price: 10,
        img: breakfastImgs["breakfast3.png"],
        category: "breakfast"
    },
    {
        id: 4,
        name: "Eggs Benedict",
        description: "Best tasty food that you can find in town",
        price: 10,
        img: breakfastImgs["breakfast4.png"],
        category: "breakfast"
    },
    {
        id: 5,
        name: "Toast And Fried Eggs",
        description: "Best tasty food that you can find in town",
        price: 10,
        img: breakfastImgs["breakfast5.png"],
        category: "breakfast"
    },
    {
        id: 6,
        name: "Full breakfast fried Egg Toast Brunch",
        description: "Best tasty food that you can find in town",
        price: 10,
        img: breakfastImgs["breakfast6.png"],
        category: "breakfast"
    },
    {
        id: 7,
        name: "Healthy Meal Plan",
        description: "Best tasty food that you can find in town",
        price: 2.55,
        img: lunchImgs["lunch1.png"],
        category: "lunch"
    },
    {
        id: 8,
        name: "Fried Chicken Bento",
        description: "Best tasty food that you can find in town",
        price: 15,
        img: lunchImgs["lunch2.png"],
        category: "lunch"
    },
    {
        id: 9,
        name: "Tarrango Fired Salmon",
        description: "Best tasty food that you can find in town",
        price: 20.55,
        img: lunchImgs["lunch3.png"],
        category: "lunch"
    },
    {
        id: 10,
        name: "Indian Lunch",
        description: "Best tasty food that you can find in town",
        price: 12.55,
        img: lunchImgs["lunch4.png"],
        category: "lunch"
    },
    {
        id: 11,
        name: "Mutton steak",
        description: "Best tasty food that you can find in town",
        price: 21.55,
        img: lunchImgs["lunch5.png"],
        category: "lunch"
    },
    {
        id: 12,
        name: "Honey Meat Fry With seed",
        description: "Best tasty food that you can find in town",
        price: 50.55,
        img: lunchImgs["lunch6.png"],
        category: "lunch"
    },
    {
        id: 13,
        name: "Salmon with Grapefruit",
        description: "Dinner that will fill your hunger with satisfaction",
        price: 50.55,
        img: dinnerImgs["dinner1.png"],
        category: "dinner"
    },
    {
        id: 14,
        name: "Lamooni Salmon Picca",
        description: "Dinner that will fill your hunger with satisfaction",
        price: 50.55,
        img: dinnerImgs["dinner2.png"],
        category: "dinner"
    },
    {
        id: 15,
        name: "Pork tandur",
        description: "Dinner that will fill your hunger with satisfaction",
        price: 50.55,
        img: dinnerImgs["dinner3.png"],
        category: "dinner"
    },
    {
        id: 16,
        name: "Franch Fries With Cheese",
        description: "Dinner that will fill your hunger with satisfaction",
        price: 50.55,
        img: dinnerImgs["dinner4.png"],
        category: "dinner"
    },
    {
        id: 17,
        name: "Garlic Butter With Baked Salmon",
        description: "Dinner that will fill your hunger with satisfaction",
        price: 50.55,
        img: dinnerImgs["dinner5.png"],
        category: "dinner"
    },
    {
        id: 18,
        name: "Baked Chicken",
        description: "Dinner that will fill your hunger with satisfaction",
        price: 50.55,
        img: dinnerImgs["dinner6.png"],
        category: "dinner"
    },
];

export default foodData;