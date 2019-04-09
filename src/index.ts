import express from 'express';
import bodyParser from 'body-parser';
import { userRouter } from './routers/users-router';
import { reimbursementsRouter } from './routers/reimbursements-router';
import { sessionMiddleware} from './middleware/session.middleware';
import { SSL_OP_PKCS1_CHECK_1 } from 'constants';

const app = express();

app.use((req,res,next) => {
    console.log(`request made with url: ${req.url} and method: ${req.method}`);
    next();
})

app.use(bodyParser.json());

app.use(sessionMiddleware);

app.get('/test', (req,res) => {
    console.log('req processed!!!!!!!')
    res.send('Here is the response data!');
})

app.post('/test', (req,res) => {
    console.log('posted to post');
    let body = req.body;
    console.log(body);
    res.send('saved test call');
})

app.get('/hello', (req,res) => {
    res.send('Hello World!');
})
/**
 * 
 */
app.use('/users', userRouter);
/**
 * 
 */
app.use('/reimbursements', reimbursementsRouter);

SSL_OP_PKCS1_CHECK_1

app.listen(8080);
console.log('end of index');