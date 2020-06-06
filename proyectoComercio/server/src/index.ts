import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';

import indexRoutes from './routes/indexRoutes';
import celularesRoutes from './routes/celularesRoutes';
import usuariosRoutes from './routes/usuariosRoutes';

class Server {

    public app: Application;
    
    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }

    //PUERTO POR EL CUAL ESCUCHARA LA BASE

    config(): void {
        this.app.set('port', process.env.PORT || 1337);

        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}));
    }

    //DIRECCION (LINK) PARA EL SERVIDOR

    routes(): void {
        this.app.use('/', indexRoutes);
        this.app.use('/api/celulares', celularesRoutes);
        this.app.use('/api/usuarios', usuariosRoutes);
    }

    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port', this.app.get('port'));
        });
    }

}

const server = new Server();
server.start();