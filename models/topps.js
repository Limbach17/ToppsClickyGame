const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const toppsSchema = new Schema ({
    name: {type: String, required: true},
    link: {type: String, rquired: true}
});

const Topps = mongoose.model("Topps", toppsSchema);

module.exports = Topps;