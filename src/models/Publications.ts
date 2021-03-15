import { uuid } from 'uuidv4';

interface PublicationsContructor {
  author: string;
  title: string;
  body: string;
}

const today = new Date();

const dd = String(today.getDate()).padStart(2, '0');
const mm = String(today.getMonth() + 1).padStart(2, '0');
const yyyy = today.getFullYear();

const hour = String(today.getHours());
const min = String(today.getMinutes());
const sec = String(today.getSeconds());

const date = String( `${dd}/${mm}/${yyyy} as ${hour}:${min}:${sec}`)

class Publications {
  id: string;
  author: string;
  title: string;
  body: string;
  createdAt: string;

  constructor({
    author,
    title,
    body,
  }: Omit<Publications, 'id' | 'createdAt'>) {
    this.id = uuid();
    this.author = author;
    this.title = title;
    this.body = body;
    this.createdAt = date;
  }
}

export default Publications;
