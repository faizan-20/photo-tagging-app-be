const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CharacterInformationSchema = new Schema({
  character: { type: String, required: true },
  xLeft: { type: Number, required: true },
  xRight: { type: Number, required: true },
  yUp: { type: Number, required: true },
  yDown: { type: Number, required: true },
  img: { type: String, required: true },
});

module.exports = mongoose.model("CharacterInformation", CharacterInformationSchema);