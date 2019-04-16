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
reimbursementRouter.get('', [
  authMiddleware(['admin','finance_manager']), async (req, res) => {
//  const status_id = +req.params.id;
  console.log('Retreiving all reimbursements');
  const user = await reimbursementDao.findAllReimbursement();
  res.json(user);
}]);

/**
 * find all reimbursements by status_id
 * endpoint: /reimbursements/:status_id
 */
reimbursementRouter.get('/status_id', [
  authMiddleware(['admin','finance_manager']), async (req, res) => {
  const status_id = +req.params.id;
  console.log(`Retreiving all reimbursements ${status_id}`);
  const user = await reimbursementDao.findAllRByStatus(status_id);
  res.json(user);
}]);

/**
 * find reimbursement by /author/user_id
 * endpoint: /reimbursements//author/user_id
 */
reimbursementRouter.get('/author/user_id', async (req, res) => {
  const user_id = +req.params.id;
  console.log(`retreiving reimbursement with id: ${user_id}`);
  res.json(await reimbursementDao.findAllRByUserID(user_id));
});

// reimbursementRouter.post('', (req, res) => {
//   console.log(`creating reimbursement`, req.body);
//   res.status(201);
//   res.send('created reimbursement');
// });

// reimbursementRouter.patch('', (req, res) => {
//   console.log(`updating reimbursement`, req.body);
//   res.send('updated reimbursement');
// });