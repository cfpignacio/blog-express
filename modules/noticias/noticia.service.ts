import { Request, Response } from 'express';
import { iNoticia } from './noticia.interface';
import { v4 as uuidv4 } from 'uuid';

const noticiaDB: iNoticia[] = [];

export const crearNoticia = (req: Request, res: Response) => {
	try {
		const data: iNoticia = req.body;

		if (!data.titulo && !data.contenido) {
			throw new Error();
		}
		const nuevaNoticia: iNoticia = {
			id: uuidv4(),
			titulo: data.titulo,
			contenido: data.contenido,
			fecha: Date.now().toString(),
		};

		noticiaDB.push(nuevaNoticia);

		res.json({ msg: `Se creo la noticia correctamente` });
	} catch (error) {
		res.status(500).json({ msg: 'No se pudo guardar la noticia' });
	}
};

export const listarNoticia = (req: Request, res: Response) => {
	res.json(noticiaDB);
};
