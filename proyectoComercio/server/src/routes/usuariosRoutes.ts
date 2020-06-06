import express, { Router } from 'express';

import usuariosControllers from '../controllers/usuariosControllers';

//RUTAS

class UsuariosRoutes {

    router: Router = Router();

    constructor() {
        this.config();
    }

    config() {
        this.router.get('/', usuariosControllers.list);
        this.router.get('/:idusu', usuariosControllers.getOne);
        this.router.post('/', usuariosControllers.create);
        this.router.put('/:idusu', usuariosControllers.update);
        this.router.delete('/:idusu', usuariosControllers.delete);
    }

}

export default new UsuariosRoutes().router;

