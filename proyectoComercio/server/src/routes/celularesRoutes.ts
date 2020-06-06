import express, { Router } from 'express';

import celularesController from '../controllers/celularesControllers';

//RUTAS

class CelularesRoutes {

    router: Router = Router();

    constructor() {
        this.config();
    }

    config() {
        this.router.get('/', celularesController.list);
        this.router.get('/:id', celularesController.getOne);
        this.router.post('/', celularesController.create);
        this.router.put('/:id', celularesController.update);
        this.router.delete('/:id', celularesController.delete);
    }

}

export default new CelularesRoutes().router;

