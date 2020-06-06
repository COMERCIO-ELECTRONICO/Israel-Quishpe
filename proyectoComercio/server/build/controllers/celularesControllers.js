"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class CelularesController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const celulares = yield database_1.default.query('SELECT * FROM celulares');
            res.json(celulares);
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const celulares = yield database_1.default.query('SELECT * FROM celulares WHERE id = ?', [id]);
            console.log(celulares.length);
            if (celulares.length > 0) {
                return res.json(celulares[0]);
            }
            res.status(404).json({ text: "El celular no existe" });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield database_1.default.query('INSERT INTO celulares set ?', [req.body]);
            res.json({ message: 'Celular Guardado' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const oldCelulares = req.body;
            yield database_1.default.query('UPDATE celulares set ? WHERE id = ?', [req.body, id]);
            res.json({ message: "El celulares fue Actualizado" });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM celulares WHERE id = ?', [id]);
            res.json({ message: "El celular fue borrado" });
        });
    }
}
const gamesController = new CelularesController;
exports.default = gamesController;
