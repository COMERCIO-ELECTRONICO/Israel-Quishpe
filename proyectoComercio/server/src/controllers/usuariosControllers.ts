import { Request, Response } from 'express';


import pool from '../database';

class UsuariosController {

    public async list(req: Request, res: Response): Promise<void> {
        const usuarios = await pool.query('SELECT * FROM usuario');
        res.json(usuarios);
    }

    public async getOne(req: Request, res: Response): Promise<any> {
        const { idusu } = req.params;
        const usuarios = await pool.query('SELECT * FROM usuario WHERE idusu = ?', [idusu]);
        console.log(usuarios.length);
        if (usuarios.length > 0) {
            return res.json(usuarios[0]);
        }
        res.status(404).json({ text: "El usuario no existe" });
    }

    public async create(req: Request, res: Response): Promise<void> {
        const result = await pool.query('INSERT INTO usuario set ?', [req.body]);
        res.json({ message: 'Usuario Guardado' });
    }

    public async update(req: Request, res: Response): Promise<void> {
        const { idusu } = req.params;
        const oldUsuarios = req.body;
        await pool.query('UPDATE usuario set ? WHERE idusu = ?', [req.body, idusu]);
        res.json({ message: "El usuario fue Actualizado" });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { idusu } = req.params;
        await pool.query('DELETE FROM usuario WHERE idusu = ?', [idusu]);
        res.json({ message: "El usuario fue borrado" });
    }
}

const gamesController = new UsuariosController;
export default gamesController;