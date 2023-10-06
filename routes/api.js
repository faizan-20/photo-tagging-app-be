const express = require('express');
const router = express.Router();

const characterInformation_controller = require('../controller/CharacterInformationController');

router.get('/character_information', characterInformation_controller.character_list);

router.get('/character_information/:id', characterInformation_controller.character_detail);

router.post('/character_information', characterInformation_controller.character_create_post);

module.exports = router;