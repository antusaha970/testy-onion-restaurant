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
      name: "Bagel and Cream Cheese",
      description: "Best tasty food that you can find in town",
      price:10,
      img: breakfastImgs["breakfast1.png"],
      category: "breakfast"
    },
    {
      name: "Breakfast Sandwich",
      description: "Best tasty food that you can find in town",
      price:10,
      img: breakfastImgs["breakfast2.png"],
      category: "breakfast"
    },
    {
      name: "Baked Chicken",
      description: "Best tasty food that you can find in town",
      price:10,
      img: breakfastImgs["breakfast3.png"],
      category: "breakfast"
    },
    {
      name: "Eggs Benedict",
      description: "Best tasty food that you can find in town",
      price:10,
      img: breakfastImgs["breakfast4.png"],
      category: "breakfast"
    },
    {
      name: "Toast And Fried Eggs",
      description: "Best tasty food that you can find in town",
      price:10,
      img: breakfastImgs["breakfast5.png"],
      category: "breakfast"
    },
    {
      name: "Full breakfast fried Egg Toast Brunch",
      description: "Best tasty food that you can find in town",
      price:10,
      img: breakfastImgs["breakfast6.png"],
      category: "breakfast"
    },
    {
      name: "Healthy Meal Plan",
      description: "Best tasty food that you can find in town",
      price:2.55,
      img: lunchImgs["lunch1.png"],
      category: "lunch"
    },
    {
      name: "Fried Chicken Bento",
      description: "Best tasty food that you can find in town",
      price:15,
      img: lunchImgs["lunch2.png"],
      category: "lunch"
    },
    {
      name: "Tarrango Fired Salmon",
      description: "Best tasty food that you can find in town",
      price:20.55,
      img: lunchImgs["lunch3.png"],
      category: "lunch"
    },
    {
      name: "Indian Lunch",
      description: "Best tasty food that you can find in town",
      price:12.55,
      img: lunchImgs["lunch4.png"],
      category: "lunch"
    },
    {
      name: "Mutton steak",
      description: "Best tasty food that you can find in town",
      price:21.55,
      img: lunchImgs["lunch5.png"],
      category: "lunch"
    },
    {
      name: "Honey Meat Fry With seed",
      description: "Best tasty food that you can find in town",
      price:50.55,
      img: lunchImgs["lunch6.png"],
      category: "lunch"
    },
    {
      name: "Salmon with Grapefruit",
      description: "Dinner that will fill your hunger with satisfaction",
      price:50.55,
      img: dinnerImgs["dinner1.png"],
      category: "dinner"
    },
    {
      name: "Lamooni Salmon Picca",
      description: "Dinner that will fill your hunger with satisfaction",
      price:50.55,
      img: dinnerImgs["dinner2.png"],
      category: "dinner"
    },
    {
      name: "Pork tandur",
      description: "Dinner that will fill your hunger with satisfaction",
      price:50.55,
      img: dinnerImgs["dinner3.png"],
      category: "dinner"
    },
    {
      name: "Franch Fries With Cheese",
      description: "Dinner that will fill your hunger with satisfaction",
      price:50.55,
      img: dinnerImgs["dinner4.png"],
      category: "dinner"
    },
    {
      name: "Garlic Butter With Baked Salmon",
      description: "Dinner that will fill your hunger with satisfaction",
      price:50.55,
      img: dinnerImgs["dinner5.png"],
      category: "dinner"
    },
    {
      name: "Baked Chicken",
      description: "Dinner that will fill your hunger with satisfaction",
      price:50.55,
      img: dinnerImgs["dinner6.png"],
      category: "dinner"
    },
  ];

  export default foodData;