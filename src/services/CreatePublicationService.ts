import Publications from '../models/Publications';
import PublicationsRepository from '../repositories/PublicationsRepository';

interface Request {
  author: string;
  title: string;
  body: string;
}

class CreatePublicationsService {
  private publicationsRepository: PublicationsRepository;

  constructor(publicationsRepository: PublicationsRepository) {
    this.publicationsRepository = publicationsRepository;
  }

  public execute({ author, title, body }: Request): Publications {

    const publication = this.publicationsRepository.create({
      author,
      title,
      body,
    });

    return publication;
  }
}

export default CreatePublicationsService;
