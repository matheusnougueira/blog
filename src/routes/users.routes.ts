import { Router } from 'express';

import UsersRepository from '../repositories/UsersRepository';
import CreateUserservice from '../services/CreateUserService';

const usersRepository = new UsersRepository();

const UsersRouter = Router();

UsersRouter.get('/', (request, response) => {
  const users = usersRepository.all();

  return response.json(users);
})

UsersRouter.post('/', async (request, response) => {
  try {
    const { email, name, password } = request.body;

    const createUser = new CreateUserservice(
      usersRepository,
    );

    const user = await createUser.execute({
      email,
      name,
      password,
    });

    return response.json(user);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default UsersRouter;
