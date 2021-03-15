import Users from '../models/Users';
import UsersRepository from '../repositories/UsersRepository';

import { hash } from 'bcryptjs'

interface Request {
  email: string;
  name: string;
  password: string;
}

class CreateUsersService {
  private usersRepository: UsersRepository;

  constructor(usersRepository: UsersRepository) {
    this.usersRepository = usersRepository;
  }

  public async execute({ email, name, password }: Request): Promise<Users> {

    const hashedPassword = await hash(password, 8);

    const user = this.usersRepository.create({
      email,
      name,
      password: hashedPassword,
    });

    return user;
  }
}

export default CreateUsersService;
