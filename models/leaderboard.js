const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LeaderboardSchema = new Schema ({
    player_name: { type: String, required: true },
    time: { type: String, required: true },
    actualTime: { type: Number, required: true },
});

module.exports = mongoose.model("Leaderboard", LeaderboardSchema);