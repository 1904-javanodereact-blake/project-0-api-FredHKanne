import { PoolClient } from 'pg';
import { connectionPool } from '.';
import { convertSqlRole } from '../util/sql-role-conveter';
import { convertSqlUser } from '../util/sql-user-conveter';

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









// import { PoolClient } from 'pg';
// import { connectionPool } from '.';
// import { convertSqlRole } from '../util/sql-role-conveter';
// import { convertSqlUser } from '../util/sql-user-conveter';

// export async function findByUsernameAndPassword(username: string, password: string) {
//   let client: PoolClient;
//   try {
//     client = await connectionPool.connect();
//     console.log(`got this far1 ${username}`);

//     const queryString = `SELECT * FROM reimbursement.user as us
//       INNER JOIN reimbursement.role as ro ON (us.role_id = ro.id)
//       WHERE username = $1 AND user_password = $2`;
//    const result = await client.query(queryString, [username, password]);
//     const user = result.rows[0];
//     console.log(`got this far2 ${user}`);
//     if (user) {
//       const convertedUser = convertSqlUser(user);
//       convertedUser.role = convertSqlRole(user);
//       return convertedUser;
//     } else {
//       return undefined;
//     }
//   } catch (err) {
//     console.log(err);
//     return undefined;
//   } finally {
//     client && client.release();
//   }
// }
