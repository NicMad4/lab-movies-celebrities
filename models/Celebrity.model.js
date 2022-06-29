//  Add your code here
const mongoose = require("mongoose");

const celebritieSchema = new mongoose.Schema({
  name: {
    type: String
  },
  occupation: {
    type: String
  },
  catchPhrase: {
    type: [String]
  },
  
});

const Celebritie = mongoose.model("Celebritie", celebritieSchema);

module.exports = Celebritie;
