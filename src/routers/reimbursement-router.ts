import express from 'express';
import * as reimbursementDao  from '../daos/reimbursement.dao';

/**
 * User router will handle all requests starting with
 *  /users
 */
export const reimbursementRouter = express.Router();

/**
 * find all reimbursements
 * endpoint: /reimbursements
 */
reimbursementRouter.get('', async (req, res) => {
  const ships = await reimbursementDao.findAllReimbursement();
  res.json(ships);
});

/**
 * find reimbursement by id
 * endpoint: /reimbursements/:id
 */
reimbursementRouter.get('/:id', async (req, res) => {
  const id = +req.params.id;
  console.log(`retreiving reimbursement with id: ${id}`);
  res.json(await reimbursementDao.findById(id));
});

/**
 * find reimbursements by owner id
 * endpoint: /reimbursements/owner/:id
 */
reimbursementRouter.get('/owner/:ownerId', async (req, res) => {
  res.json(await reimbursementDao.findByOwner(+req.params.ownerId));
});

reimbursementRouter.post('', (req, res) => {
  console.log(`creating reimbursement`, req.body);
  res.status(201);
  res.send('created reimbursement');
});

reimbursementRouter.patch('', (req, res) => {
  console.log(`updating reimbursement`, req.body);
  res.send('updated reimbursement');
});