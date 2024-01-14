/**
 * Represents the API for retrieving monster data.
 */
import { Hono } from 'hono';
import { env } from 'hono/adapter';
import { cache } from 'hono/cache';

export const monsters = new Hono();

monsters.get('/', (c) => {
    return c.html(
        <>
            <h1>Route for collection of monster data</h1>
            <p>documentation coming soon</p>
        </>
    );
})

/**
 * Retrieves all monsters.
 * @param c - The context object.
 * @returns A JSON response containing all monsters.
 */
monsters.get(
    '/all',
    cache({
        cacheName: 'dnde-monsters-all',
        cacheControl: 'max-age=86400',
    }), async (c) => {
    const { DND_API_BASE } = env<{ DND_API_BASE: string }>(c);

    try {
        const response = await fetch(`${DND_API_BASE}monsters`);
        if (!response.ok) {
            throw new Error('Failed to retrieve monster data.');
        }

        const monsters = await response.json();

        if (monsters) return c.json({ monsters });

        return c.json({ error: 'No monsters found.' });
    } catch (error) {
        return c.json({ error: c });
    }
});

/**
 * Retrieves a specific monster by name.
 * @param c - The context object.
 * @returns A JSON response containing individual monster data.
 */
monsters.get(
    '/:name?',
    cache({
        cacheName: 'dnde-monsters-name',
        cacheControl: 'max-age=86400',
    }), async (c) => {
    const { DND_API_BASE, DND_API_IMAGE } = env<{ DND_API_BASE: string, DND_API_IMAGE: string }>(c);
    const name = c.req.param('name');

    try {
        const response = await fetch(`${DND_API_BASE}monsters/${name}`);
        if (!response.ok) {
            throw new Error('Failed to retrieve monster data.');
        }

        const monster = await response.json();

        if (monster) {
            return c.json({ monster });
        }

        return c.json({ error: 'Monster not found.' });
    } catch (error) {
        return c.json({ error: 'An error occurred while retrieving monster data.' });
    }
});