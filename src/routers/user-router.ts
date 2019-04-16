import express from 'express';
//import { users } from '../state';
//import { User } from '../model/user';
import { authMiddleware } from '../middleware/auth.middleware';
import * as userDao from '../daos/user.dao';

/**
 * User router will handle all requests starting with
 *  /users
 */
export const userRouter = express.Router();

/**
 * find all users
 * endpoint: /users
 */
userRouter.get('', [
  authMiddleware(['admin','finance_manager']), async (req, res) => {
  console.log('Retreiving all users');
  const user = await userDao.findAllUsers();
  res.json(user);
}]);

/**
 * find user by id
 * endpoint: /users/:id
 */
// userRouter.get('/:id', [
//   authMiddleware(['admin','finance_manager']), async (req, res) => {
//   const user_id: number = +req.params.user_id;
// //  const {user_id} = req.body;
// console.log(`retreiving user with id: ${user_id}`);
//   const user = await userDao.findById(user_id);
//   if (user) {
//     // attach the user data to the session object
//     req.session.user = user;
//   res.json(user);
//   } else {
//   res.sendStatus(401);
//   }
// }]);


/**
 * find user by id
 * endpoint: /users/:id
 */
userRouter.get('/:id', async (req, res) => {
  const id: number = +req.params.id;
  const user_id: number = +req.params.id;
  console.log(`retreiving user with id: ${user_id}`);
  const user = await userDao.findById(user_id);
  if (user) {
    res.json(user);
  } else {
    res.sendStatus(404);
  }
});

/**
 * user login with username and password
 */
userRouter.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const user = await userDao.findByUsernameAndPassword(username, password);
  if (user) {
    // attach the user data to the session object
    req.session.user = user;
    res.json(user);
  } else {
    res.sendStatus(400);
  }
});

/**
 * find user by id
 * endpoint: /users/:id
 */
userRouter.patch('/:id', [
  authMiddleware(['admin']), async (req, res) => {
  const user_id: number = +req.params.id;
  console.log(`updating user with id: ${user_id}`);
  const user = await userDao.patchUserById(user_id);
  if (user) {
    // attach the user data to the session object
    req.session.user = user;
  res.json(user);
  } else {
  res.sendStatus(401);
  }
}]);