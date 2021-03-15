import { Router } from 'express';

import PublicationsRepository from '../repositories/PublicationsRepository';
import CreatePublicationService from '../services/CreatePublicationService';

const publicationsRepository = new PublicationsRepository();

const publicationsRouter = Router();

publicationsRouter.get('/', (request, response) => {
  const publications = publicationsRepository.all();

  return response.json(publications);
})

publicationsRouter.get('/', (request, response) => {
  const { id } = request.body;
  const publication = publicationsRepository.findById(id);

  return response.json(publication);
})

publicationsRouter.post('/', (request, response) => {
  try {
    const { author, title, body } = request.body;

    const createPublication = new CreatePublicationService(
      publicationsRepository,
    );

    const publication = createPublication.execute({
      author,
      title,
      body
    });

    return response.json(publication);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default publicationsRouter;
