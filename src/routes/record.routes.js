import express from 'express';

import RecordController from '../controllers/game.controller.js';

const recordRouter = express.Router();

gameRouter.get('/', RecordController.findAll);
gameRouter.post('/', RecordController.create);

export default recordRouter; 