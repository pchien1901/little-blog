import userRouter from './user.route.js';
import authRouter from './auth.route.js';

export const initRoutes = (app)=> {
    app.use('/api/v1/users', userRouter);
    app.use('/api/v1/auth', authRouter);
}

