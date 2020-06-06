import { Request, Response } from 'express';


import pool from '../database';

class CelularesController {

    public async list(req: Request, res: Response): Promise<void> {
        const celulares = await pool.query('SELECT * FROM celulares');
        res.json(celulares);
    }

    public async getOne(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const celulares = await pool.query('SELECT * FROM celulares WHERE id = ?', [id]);
        console.log(celulares.length);
        if (celulares.length > 0) {
            return res.json(celulares[0]);
        }
        res.status(404).json({ text: "El celular no existe" });
    }

    public async create(req: Request, res: Response): Promise<void> {
        const result = await pool.query('INSERT INTO celulares set ?', [req.body]);
        res.json({ message: 'Celular Guardado' });
    }

    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const oldCelulares = req.body;
        await pool.query('UPDATE celulares set ? WHERE id = ?', [req.body, id]);
        res.json({ message: "El celulares fue Actualizado" });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM celulares WHERE id = ?', [id]);
        res.json({ message: "El celular fue borrado" });
    }
}

const gamesController = new CelularesController;
export default gamesController;