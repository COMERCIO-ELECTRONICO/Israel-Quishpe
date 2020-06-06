"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuariosControllers_1 = __importDefault(require("../controllers/usuariosControllers"));
//RUTAS
class UsuariosRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', usuariosControllers_1.default.list);
        this.router.get('/:idusu', usuariosControllers_1.default.getOne);
        this.router.post('/', usuariosControllers_1.default.create);
        this.router.put('/:idusu', usuariosControllers_1.default.update);
        this.router.delete('/:idusu', usuariosControllers_1.default.delete);
    }
}
exports.default = new UsuariosRoutes().router;
