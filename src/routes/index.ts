import { getImage, checkIfImageExist } from './../utils/resizeImage';
import express, { Request, Response } from 'express';
import fs from 'fs';
import { nextTick } from 'process';
const router = express.Router();
const pathFromRoot = process.cwd() + '/public';

router.get('/images', async (req: Request, res: Response, next): Promise<void> => {
    const query: {
        imagename?: string;
        width?: string;
        height?: string;
    } = req.query;
    const imageName: string | undefined = query.imagename?.split('.')[0];
    const imagePath: string = pathFromRoot + `/images/${imageName}.jpg`;
    const width: string | undefined = query.width;
    const widthNum: number | undefined = parseInt(query.width as string);
    const height: string | undefined = query.height;
    const heightNum: number | undefined = parseInt(query.height as string);

    if (imageName) {
        if (width && (!widthNum || widthNum <= 0)) {
            res.status(400).send('width less than 0');
        } else if (height && (!heightNum || heightNum <= 0)) {
            res.status(400).send('height less than 0');
        } else {
            if (fs.existsSync(imagePath)) {
                if (widthNum || heightNum) {
                    const checkImageExist: string | undefined =
                        checkIfImageExist(imageName, widthNum, heightNum);
                    if (checkImageExist) {
                        res.status(200).sendFile(checkImageExist);
                    } else {
                        const getImageAfterSharp: string = await getImage(
                            imageName,
                            widthNum,
                            heightNum
                        );
                        const root: string =
                            pathFromRoot + `/thumbinals/${getImageAfterSharp}`;
                        res.status(200).sendFile(root);
                    }
                } else {
                    res.status(200).sendFile(imagePath);
                }
            } else {
                res.status(400).send('invalid image Name');

            }
        }
    } else {
        res.status(400).send(
            'write in url "api/images/?imagename=(Image Name from src/public/images folder)"'
        );
    }
});

export default router;
