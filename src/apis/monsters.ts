/**
 * Represents the API for retrieving monster data.
 */
import { Hono } from 'hono';
import { env } from 'hono/adapter';

export const monsters = new Hono();

/**
 * Retrieves all monsters.
 * @param c - The context object.
 * @returns A JSON response containing all monsters.
 */
monsters.get('/all', async (c) => {
    const { DND_API_BASE } = env<{ DND_API_BASE: string }>(c);

    const response = await fetch(`${DND_API_BASE}monsters`);
    const monsters = await response.json();

    if (monsters) return c.json({ monsters });

    return c.json({ error: 'No monsters found.' });
});

/**
 * Retrieves a specific monster by name.
 * @param c - The context object.
 * @returns A JSON response containing individual monster data.
 */
monsters.get('/:name?', async (c) => {
    const { DND_API_BASE } = env<{ DND_API_BASE: string }>(c);
    const name = c.req.param('name');

    const response = await fetch(`${DND_API_BASE}monsters/${name}`);
    const monsterData = await response.json();

    if (monsterData) return c.json({ monsterData });

    return c.json({ error: 'Monster not found.' });
});