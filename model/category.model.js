const { default: mongoose } = require("mongoose");

const categorySchema = new mongoose.Schema({
  categoryname: {
    type: String,
    required: true
  },
  categoryImage:String
});
module.exports = mongoose.model("category", categorySchema);