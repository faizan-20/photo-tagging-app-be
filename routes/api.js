const express = require('express');
const router = express.Router();

const characterInformation_controller = require('../controller/CharacterInformationController');
const leaderboard_controller = require('../controller/LeaderboardController');

router.get('/character_information', characterInformation_controller.character_list);

router.get('/character_information/:id', characterInformation_controller.character_detail);

router.post('/character_information', characterInformation_controller.character_create_post);

router.get('/leaderboard', leaderboard_controller.player_list);

router.post('/save_player', leaderboard_controller.player_create);

module.exports = router;
