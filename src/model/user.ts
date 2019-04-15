import { Role } from './role';

export class User {
  userId: number;
  username: string;
  password: string;
  firstname: string;
  lastname: string;
  role: Role;

  constructor(userId = 0, username = '', password = '', firstname = '', lastname = '',role: Role = undefined) {
    this.userId = userId;
    this.username = username;
    this.password = password;
    this.firstname = firstname;
    this.lastname = lastname;
    this.role = role;
  }
}