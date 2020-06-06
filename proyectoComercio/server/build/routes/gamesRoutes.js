"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
//import gamesController from '../controllers/gamesController';
class GameRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        /* this.router.get('/', gamesController.list);
         this.router.get('/:id', gamesController.getOne);
         this.router.post('/', gamesController.create);
         this.router.put('/:id', gamesController.update);
         this.router.delete('/:id', gamesController.delete);*/
    }
}
exports.default = new GameRoutes().router;
