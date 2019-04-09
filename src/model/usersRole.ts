export class UsersRole {
    roleId: number; // primary key
    role: string; // not null, unique

constructor(
    roleId = 0,
    role = 0) {

    this.roleId = roleId;
    this.role = role;
    }
}