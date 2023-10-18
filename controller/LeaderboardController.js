const Leaderboard = require('../models/leaderboard');
const asyncHandler = require('express-async-handler');

exports.player_list = asyncHandler(async (req, res, next) => {
    const allPlayers = await Leaderboard.find({}).sort({actualTime: 1}).exec();
    res.json(allPlayers);
});

exports.player_create = asyncHandler(async (req, res, next) => {
    const player = new Leaderboard({
        player_name: req.body.player_name,
        time: req.body.time,
        actualTime: req.body.actualTime,
    });

    await player.save();
    res.json({
        message: "success: player created",
    });
});
