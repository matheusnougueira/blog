import Publications from '../models/Publications';

interface CreatePublicationsDTO {
  author: string;
  title: string;
  body: string;
}

class PublicationsRepository {
  private publications: Publications[];

  constructor() {
    this.publications = [];
  }

  public all(): Publications[] {
    return this.publications;
  }

  public findById(id: string): Publications | null {
    const findPublication = this.publications.find(
      publications => id === publications.id,
    );

    return findPublication || null;
  }

  public create({ author, title, body }: CreatePublicationsDTO): Publications {
    const publication = new Publications({ author, title, body });

    this.publications.push(publication);

    return publication;
  }
}

export default PublicationsRepository;
