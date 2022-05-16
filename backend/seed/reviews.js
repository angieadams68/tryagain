const db = require("../db");
const { Review } = require("../models");

db.on("error", console.error.bind(console, "MongoDB connection error:"))


const main = async () => {
    const reviews = [
      {
        name: "Johnny S ",
        review:
          "I am super excited for this site to launch! The trial was fun.",
        
      },
      {
        name: "Gibby Gibson",
        review:
          "Rad",
    
      },
    ];
  
    await Review.insertMany(reviews);
    console.log("Created some reviews!");
  };
  const run = async () => {
    await main();
    db.close();
  };
  
  run();
  