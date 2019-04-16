import express from 'express';
import * as reimbursementDao  from '../daos/reimbursement.dao';
import { authMiddleware } from '../middleware/auth.middleware';

/**
 * User router will handle all requests starting with
 *  /users
 */
export const reimbursementRouter = express.Router();

/**
 * find all reimbursements
 * endpoint: /reimbursements
 */
// reimbursementRouter.get('', [
//   authMiddleware(['admin']),
//   async (req, res) => {
//   const reimbursements= await reimbursementDao.findAllReimbursement();
//   res.json(reimbursements);
// }]);

/**
 * find reimbursements by  status id
 * endpoint: /reimbursements/status/:id
 */
reimbursementRouter.get('/status/:id', [
  authMiddleware(['admin','finance_manager']), async (req, res) => {
    const status_id: number = +req.params.id;
    console.log(`retreiving reimbursement with status id: ${status_id}`);
    const user = await reimbursementDao.findById(status_id);
  if (user) {
    // attach the user data to the session object
    req.session.user = user;
  res.json(user);
  } else {
  res.sendStatus(401);
  }
}]);

/**
 * find reimbursement by /author/user_id
 * endpoint: /reimbursements//author/user_id
 */
reimbursementRouter.get('/author/:id', [
  authMiddleware(['admin','finance_manager']), async (req, res) => {
    const id: number = +req.params.id;
    console.log(`retreiving reimbursement with author: ${id}`);
    const user = await reimbursementDao.findById(id);
  if (user) {
    // attach the user data to the session object
    req.session.user = user;
  res.json(user);
  } else {
  res.sendStatus(401);
  }
}]);

// reimbursementRouter.post('', (req, res) => {
//   console.log(`creating reimbursement`, req.body);
//   res.status(201);
//   res.send('created reimbursement');
// });

// reimbursementRouter.patch('', (req, res) => {
//   console.log(`updating reimbursement`, req.body);
//   res.send('updated reimbursement');
// });