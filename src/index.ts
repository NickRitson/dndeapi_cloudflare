import { Hono } from 'hono';
import { logger } from 'hono/logger';

import { monsters } from './apis/monsters';
import { monster } from './apis/monster-page';

const app = new Hono().basePath('/api');

app.use("*", logger());

app.get('/', (c) => c.text('DNDEAPI - COMING'))

app.route('monsters', monsters);
app.route('monster', monster);

export default {
    fetch: app.fetch,
    port: 8787,
};