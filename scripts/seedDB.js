const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/reactclicky-game"
);

const toppsSeed = [
    {
        name: "Andrew McCutchen",
        link: "https://s3.us-east-2.amazonaws.com/bootcamp-clicky-game/andrew_mccutchen.jpg"
    },

    {
        name: "Barry Bonds",
        link: "https://s3.us-east-2.amazonaws.com/bootcamp-clicky-game/barry_bonds.jpg"
    },

    {
        name: "Bill Mazeroski",
        link: "https://s3.us-east-2.amazonaws.com/bootcamp-clicky-game/bill_mazeroski.jpg"
    },

    {
        name: "Dave Parker",
        link: "https://s3.us-east-2.amazonaws.com/bootcamp-clicky-game/dave_parker.jpg"
    },

    {
        name: "Dick Groat",
        link: "https://s3.us-east-2.amazonaws.com/bootcamp-clicky-game/dick_groat.jpg"
    },

    {
        name: "Honus Wagner",
        link: "https://s3.us-east-2.amazonaws.com/bootcamp-clicky-game/honus_wagner.jpg"
    },

    {
        name: "Jason Kendall",
        link: "https://s3.us-east-2.amazonaws.com/bootcamp-clicky-game/jason_kendall.jpg"
    },

    {
        name: "Pie Traynor",
        link: "https://s3.us-east-2.amazonaws.com/bootcamp-clicky-game/pie_traynor.jpg"
    },

    {
        name: "Ralph Kiner",
        link: "https://s3.us-east-2.amazonaws.com/bootcamp-clicky-game/ralph_kiner.jpg"
    },

    {
        name: "Roberto Clemente",
        link: "https://s3.us-east-2.amazonaws.com/bootcamp-clicky-game/roberto_clemente.jpg"
    },

    {
        name: "Steve Blass",
        link: "https://s3.us-east-2.amazonaws.com/bootcamp-clicky-game/steve_blass.jpg"
    },

    {
        name: "Willie Stargell",
        link: "https://s3.us-east-2.amazonaws.com/bootcamp-clicky-game/willie_stargell.jpgs3://bootcamp-clicky-game/barry_bonds.jpg"
    },
];

db.Topps
    .remove({})
    .then(() => db.Topps.collection.insertManny(toppsSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err =>{
        console.error(err);
        process.exit(1);
    })