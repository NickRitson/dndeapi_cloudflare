import { Hono } from 'hono';
import { env } from 'hono/adapter';
import { cache } from 'hono/cache';

export const monster = new Hono();

import MonsterPage from '../pages/MonsterPage';

/**
 * Retrieves monster data based on the provided name.
 * @param c - The request context.
 * @returns The HTML representation of the monster page if found, otherwise returns a JSON object with an error message.
 */
monster.get(
    '/:name',
    cache({
        cacheName: 'dnde-monster',
        cacheControl: 'max-age=86400',
    }), async (c) => {
        const { DND_API_BASE, DND_API_IMAGE } = env<{ DND_API_BASE: string, DND_API_IMAGE: string }>(c);
        const monsterName = c.req.param('name');

        try {
            const response = await fetch(`${DND_API_BASE}monsters/${monsterName}`);
            if (!response.ok) {
                throw new Error('Failed to retrieve monster data.');
            }

            const monsterData = await response.json();

            if (monsterData) {
                return c.html(<MonsterPage monster={monsterData} base={DND_API_IMAGE} />)
            }

            return c.html(<h1>Monster Not Found</h1>);
        } catch (error) {
            return c.json({ error: `An error occurred while retrieving monster data: ${error}` });
        }
});