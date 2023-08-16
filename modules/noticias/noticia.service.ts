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
			fecha: new Date().toLocaleDateString(),
		};

		noticiaDB.push(nuevaNoticia);

		res.json({ msg: `Se creo la noticia correctamente` });
	} catch (error) {
		res.status(500).json({ msg: 'No se pudo guardar la noticia' });
	}
};

export const listarNoticia = (req: Request, res: Response) => {
	try {
		res.json(noticiaDB);
	} catch (error) {
		res.status(500).json({ msg: 'No se pudo obtener un listado de noticias' });
	}
};

// obtener noticia por id
export const obtenerNoticiaId = (req: Request, res: Response) => {
	try {
		const noticia = noticiaDB.find((n) => n.id === req.params.id);
		if (!noticia) {
			throw new Error();
		}
		res.json(noticia);
	} catch (error) {
		res.status(404).json({ msg: 'No se pudo encontrar la noticia' });
	}
};

// eliminar noticia
