import express from 'express';
import cors from 'cors';
import compression from 'compression';
import expressPlayGround from 'graphql-playground-middleware-express';

const app = express();
app.use('*', cors());
app.use(compression());

app.listen(7000, () =>console.log('Server on Line....'));