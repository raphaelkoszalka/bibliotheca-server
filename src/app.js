import http from 'http';
import { env, mongo, port, ip, apiRoot } from './config';
import mongoose from './services/mongoose';
import express from './services/express';
import api from './api';

const app = express(apiRoot, api);
const server = http.createServer(app);

mongoose.connect(mongo.uri, { useMongoClient: true });
mongoose.Promise = Promise;

setImmediate(() => {
  server.listen(port, ip, () => {
    console.log('___________________________________');
    console.log('');
    console.log('https://bibliotheca.raphael.website');
    console.log('Bibliotheca API server listening on http://%s:%d, in %s mode', ip, port, env);
    console.log('___________________________________');
  });
});

export default app;
