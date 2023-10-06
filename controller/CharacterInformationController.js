const CharacterInformation = require('../models/characterInformation');
const asyncHandler = require('express-async-handler');

exports.character_list = asyncHandler(async (req, res, next) => {
    const allCharacters = await CharacterInformation.find({}).exec();
    res.json(allCharacters);
});

exports.character_create_post = asyncHandler(async (req, res, next) => {
    const character = new CharacterInformation ({
        character: req.body.character,
        xLeft: req.body.xLeft,
        xRight: req.body.xRight,
        yUp: req.body.yUp,
        yDown: req.body.yDown,
    });

    await character.save();
    res.json({
        message: "success: character information created",
        character
    });
});