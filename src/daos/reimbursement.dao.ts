import { connectionPool } from '.';
import { PoolClient } from 'pg';
import { convertSqlReimbursement } from '../util/sql-reimbursement-conveter';

export async function findAllReimbursement() {
  let client: PoolClient;
  try {
    client = await connectionPool.connect();
    const result = await client.query('SELECT * FROM reimbursement.reimbursement');
    return result.rows.map(convertSqlReimbursement);
  } catch (err) {
    console.log(err);
    return undefined;
  } finally {
    client && client.release();
  }
}

export async function findById(id: number) {
  let client: PoolClient;
  try {
    client = await connectionPool.connect();
    const queryString = 'SELECT * FROM reimbursement.reimbursement WHERE reimbursement_id = $1';
    const result = await client.query(queryString, [id]);
    console.log(result.rows);
    return convertSqlReimbursement(result.rows[0]);
  } catch (err) {
    console.log(err);
    return undefined;
  } finally {
    client && client.release();
  }
}

export async function findByOwner(ownerId: number) {
  let client: PoolClient;
  try {
    client = await connectionPool.connect();
    const queryString = 'SELECT * FROM reimbursement.reimbursement WHERE reimbursement_owner = $1';
    const result = await client.query(queryString, [ownerId]);

    // convert db results into actual reimbursements
    const seimbursements = result.rows.map(convertSqlReimbursement);
    console.log(seimbursements);
    return seimbursements;
  } catch (err) {
    console.log(err);
    return undefined;
  } finally {
    client && client.release();
  }
}