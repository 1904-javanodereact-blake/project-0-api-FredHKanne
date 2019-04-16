import { PoolClient } from 'pg';
import { connectionPool } from '.';
import { convertSqlRole } from '../util/sql-role-converter';
import { convertSqlUser } from '../util/sql-user-converter';
//import { convertSqlReimbursement } from '../util/sql-reimbursement-conveter';

export async function findAllUsers() {
  let client: PoolClient;
  try {
    client = await connectionPool.connect();
    const result = await client.query('SELECT * FROM reimbursement.user');
//    console.log(`after all user await ${result.rows}`);
    return result.rows.map(convertSqlUser);
  } catch (err) {
    console.log(err);
    return undefined;
  } finally {
    client && client.release();
  }
}

export async function findById(user_id: number) {
  let client: PoolClient;
  try {
    client = await connectionPool.connect();
    const queryString = 'SELECT * FROM reimbursement.user WHERE user_id = $1';
    const result = await client.query(queryString, [user_id]);
    console.log(result.rows);
    return result.rows[0] && convertSqlUser(result.rows[0]);
  } catch (err) {
    console.log(err);
    return undefined;
  } finally {
    client && client.release();
  }
}

export async function patchUserById(user_id: number) {
  let client: PoolClient;
  try {
    client = await connectionPool.connect();
    const queryString = 'UPDATE reimbursement.user SET user_id=$1, username=$2, password=$3, firstname=$4, lastname=$5, email=$6, role.role=$7 WHERE user_id = $1';
    const result = await client.query(queryString, [user_id]);
    console.log(result.rows);
    return convertSqlUser(result.rows[0]);
  } catch (err) {
    console.log(err);
    return undefined;
  } finally {
    client && client.release();
  }
}

export async function findByUsernameAndPassword(username: string, password: string) {
  let client: PoolClient;
  try {
    client = await connectionPool.connect();
    const queryString = `SELECT * FROM reimbursement.user as us
      INNER JOIN reimbursement.role as ro ON (us.role = ro.role_id)
      WHERE username = $1 AND password = $2`;
    const result = await client.query(queryString, [username, password]);
    const user = result.rows[0];

    if (user) {
      const convertedUser = convertSqlUser(user);
      convertedUser.role = convertSqlRole(user);
      return convertedUser;
    } else {
      return undefined;
    }
  } catch (err) {
    console.log(err);
    return undefined;
  } finally {
    client && client.release();
  }
}