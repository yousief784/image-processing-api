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

    it('test endpoint with valid imagename', async () => {
        const response = await request.get(
            `/api/images/?imagename=${validImagename}&width=${width}&height=${height}`
        );
        expect(response.status).toBe(200);
    });

    it('test endpoint with invalid imagename', async () => {
        const response = await request.get(
            `/api/images/?imagename=${invalidImagename}&width=${width}&height=${height}`
        );
        expect(response.status).toBe(400);
    });
});
