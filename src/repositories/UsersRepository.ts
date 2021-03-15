import Users from '../models/Users';

interface CreateUsersDTO {
  email: string;
  name: string;
  password: string;
}

class UsersRepository {
  private users: Users[];

  constructor() {
    this.users = [];
  }

  public all(): Users[] {
    return this.users
  }

  public create({ email, name, password }: CreateUsersDTO): Users {
    const publication = new Users({ email, name, password });

    this.users.push(publication);

    return publication;
  }
}

export default UsersRepository;
