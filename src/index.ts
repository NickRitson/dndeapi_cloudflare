import { Hono } from 'hono';
import { logger } from "hono/logger";

import { monsters } from './apis/monsters';

const app = new Hono().basePath('/api');
app.use("*", logger());

app.get('/', (c) => c.text('DNDEAPI - COMING'))

app.route('monsters', monsters);

export default {
    fetch: app.fetch,
    port: 8787,
};