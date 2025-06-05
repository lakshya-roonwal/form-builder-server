
import express from 'express';
import cookieParser from 'cookie-parser';

import type { Request, Response } from 'express';
import { connectToDB } from './db';
import userRoute from './routes/user.route';


const app = express();

connectToDB();


// Middlewares
app.use(express.json());
app.use(cookieParser());

const healthCheck = async (req: Request, res: Response) => {
    res.status(200).json({
        success: true,
        message: 'Running Correcty',
    });
    return;
};

app.get('/healthcheck', healthCheck);
app.use('/api/v1/', userRoute);


export default app;

