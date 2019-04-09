import express from 'express';
import { Reimbursements } from '../model/reimbursements';
/**
 * User reimbursements will handle all requests starting with
 *  /reimbursements
 */
export const reimbursementsRouter = express.Router();

reimbursementsRouter.get('', (req, res) => {
  console.log('retreiving all reimbursements')
  res.send('all reimbursements')
})

reimbursementsRouter.get('/:id', (req, res) => {
    console.log(`retreiving reimbursements with id: ${req.params.id}`);
    res.send(`here is the reimbursements with id: ${req.params.id}`);
  })

reimbursementsRouter.get('/author', (req, res) => {
    console.log(`retreiving reimbursements with author: ${req.params.author}`);
    res.send(`here is the reimbursements with author: ${req.params.author}`);
  })

reimbursementsRouter.post('', (req, res) => {
    console.log('creating reimbursements', req.body);
    const reimbursement: Reimbursements = req.body;
    reimbursement.reimbursementId = Math.floor(Math.random() * 10000000);
//    reimbursement.push(reimbursement);
    res.status(201);
    res.send(`created reimbursements`);
  })
  
reimbursementsRouter.patch('', (req, res) => {
    console.log('reimbursements', req.body);
    res.send(`patching: ${req.params.reimbursements}`);
  })