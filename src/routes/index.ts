import { Router } from 'express';
import publicationsRouter from './publications.routes';
import usersRouter from './users.routes';

const routes = Router();

routes.use('/publications', publicationsRouter);
routes.use('/users', usersRouter);

export default routes;
