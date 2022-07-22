import express, { Request, Response } from 'express';
import router from './routes';
const app = express();
const port = 3000;
const host = 'http://localhost:';

app.use('/api', router);

app.get('/', async (_req: Request, res: Response): Promise<void> => {
    res.send(`Image Processing API Project <br> access end point <br>
    http://localhost:3000/api/images <br>
    example: <br>
    http://localhost:3000/api/images/?imagename=fjord&width=500&height=400 <br>
    can remove thumbinals folder from public folder and it recreated when access above endpoint`);
});

app.listen(port, async (): Promise<void> => {
    console.log(`app run at ${host}${port}`);
});

export default app;
