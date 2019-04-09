import { User } from "./user";
import { Reimbursements } from "./reimbursements";

export let users: User[] = [
  new User(1, 'BlakeKruppa', 'password', 'Blake', 'Kruppa', 'email@', 'Admin'),
  new User(2, 'BradleyP', 'pass', 'Bradley','Pelton', 'email@', 'finance-manager'),
  new User(8527754, 'FredK', 'password', 'Fred', 'Kanne', 'email@', 'finance-manager'),
];

export let reimbursement: Reimbursements[] = [
  new Reimbursements(1, 2, 350.00, 5000, 5000, 'its a reimbursement'),
  new Reimbursements(2, 2, 250.00, 5000, 5000, 'its a reimbursement'),
  new Reimbursements(3, 2, 100.50, 5000, 5000, 'its a reimbursement'),
  new Reimbursements(4, 2, 150.00, 5000, 5000, 'its a reimbursement'),
  new Reimbursements(5, 4, 400.00, 5000, 5000, 'its a reimbursement'),
];