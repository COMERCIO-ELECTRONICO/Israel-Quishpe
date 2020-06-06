"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const celularesControllers_1 = __importDefault(require("../controllers/celularesControllers"));
//RUTAS
class CelularesRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', celularesControllers_1.default.list);
        this.router.get('/:id', celularesControllers_1.default.getOne);
        this.router.post('/', celularesControllers_1.default.create);
        this.router.put('/:id', celularesControllers_1.default.update);
        this.router.delete('/:id', celularesControllers_1.default.delete);
    }
}
exports.default = new CelularesRoutes().router;
