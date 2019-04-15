import { SqlReimbursement } from '../dto/sql-reimbursement-dto';
import { Reimbursement } from '../model/reimbursement';

export function convertSqlReimbursement(reimbursements: SqlReimbursement) {
  return new Reimbursement(reimbursements.reimbursementId, reimbursements.author, 
    reimbursements.amount, reimbursements.dateSubmitted, reimbursements.dateResolved, 
    reimbursements.description, reimbursements.resolver,reimbursements.status, reimbursements.type);
}
