import { uuid } from 'uuidv4';

interface UsersContructor {
  email: string;
  name: string;
  password: string;
}

const today = new Date();

const dd = String(today.getDate()).padStart(2, '0');
const mm = String(today.getMonth() + 1).padStart(2, '0');
const yyyy = today.getFullYear();

const hour = String(today.getHours());
const min = String(today.getMinutes());
const sec = String(today.getSeconds());

const date = String( `${dd}/${mm}/${yyyy} as ${hour}:${min}:${sec}`)

class Users {
  id: string;
  email: string;
  name: string;
  password: string
  createdAt: string;

  constructor({
    name,
    email,
    password
  }: Omit<Users, 'id' | 'createdAt'>) {
    this.id = uuid();
    this.name = name;
    this.email = email;
    this.password = password;
    this.createdAt = date;
  }
}

export default Users;
