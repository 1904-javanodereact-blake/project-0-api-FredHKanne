import express from 'express';

/**
 * User reimbursementType will handle all requests starting with
 *  /reimbursementsType
 */
export const reimbursementTypeRouter = express.Router();

reimbursementTypeRouter.get('', (req, res) => {
  console.log('retreiving all reimbursementTypes')
  res.send('all reimbursementTypes')
})

reimbursementTypeRouter.get('/:id', (req, res) => {
    console.log(`retreiving spaceship with id: ${req.params.id}`);
    res.send(`here is the spaceship with id: ${req.params.id}`);
})

reimbursementTypeRouter.get('/owner/:ownerid', (req, res) => {
console.log(`retreiving spaceship with owner id: ${req.params.ownerid}`);
res.send(`here is the spaceship with owner id: ${req.params.ownderid}`);
})

reimbursementTypeRouter.post('', (req, res) => {
console.log('creating spaceship', req.body);
res.status(201);
res.send(`created spaceship`);
})

reimbursementTypeRouter.patch('', (req, res) => {
console.log('updating spaceship', req.body);
res.send(`patching: ${req.params.spaceships}`);
})