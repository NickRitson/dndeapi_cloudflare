import { expect, test } from 'vitest';
import { monsters } from './monsters';

const MOCK_ENV = {
    DND_API_BASE: process.env.DND_API_BASE,
};
  
test('GET /api/monsters/all', async () => {
    const res = await monsters.request('/all', {}, MOCK_ENV);

    expect(res.status).toBe(200)
    expect(await res.json()).toBeTypeOf('object');
});

test('GET /api/monsters/:name', async () => {
    const res = await monsters.request('/beholder', {}, MOCK_ENV);

    expect(res.status).toBe(200)
    expect(await res.json()).toBeTypeOf('object');
});
