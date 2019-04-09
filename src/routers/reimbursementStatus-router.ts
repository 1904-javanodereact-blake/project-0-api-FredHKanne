import express from 'express';

/**
 * User reimbursementsStatus will handle all requests starting with
 *  /reimbursementsStatus
 */
export const reimbursementStatusRouter = express.Router();

reimbursementStatusRouter.get('/statusId', (req, res) => {
  console.log(`retreiving status id: ${req.params.statusId}`);
  res.send(`here is the status id: ${req.params.statusId}`);
})

reimbursementStatusRouter.post('', (req, res) => {
  console.log('creating spaceship', req.body);
  res.status(201);
  res.send(`created spaceship`);
})
