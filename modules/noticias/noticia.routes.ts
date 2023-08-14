import express from 'express';
import { crearNoticia, listarNoticia } from './noticia.service';

const noticiasRoutes = express.Router();

// endpoint para crear una noticia
noticiasRoutes.post('/', crearNoticia);

// endpoint para consultar todas las noticias

noticiasRoutes.get('/', listarNoticia);

// [GET] endpoint obtener noticia por id /:id

// [DELETE] endpoint borrar

export default noticiasRoutes;
