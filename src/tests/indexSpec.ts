import { getImage } from './../utils/resizeImage';
import supertest from 'supertest';
import app from '..';

const request = supertest(app);

describe('test', () => {
    const validImagename = 'santamonica';
    const invalidImagename = 'plane';
    const width = 500;
    const height = 400;

    it('test endpoint', async () => {
        const response = await request.get('/api/images');
        expect(response.status).toBe(400);
    });

    it('test endpoint with valid imagename, valid width and valid height', async () => {
        await expectAsync(
            getImage(validImagename, width, height)
        ).toBeResolved();
    });

    it('test endpoint with invalid imagename, valid width but invalid height', async () => {
        await expectAsync(getImage(invalidImagename, width, -1)).toBeRejected();
    });
});
