import express from 'express';
import mongoose from 'mongoose';
import http from 'http';
import configs from './configs/configs.js';
import expressConfig from './frameworks/webserver/express.js';
import serverConfig from './frameworks/webserver/server.js';
import routes from './frameworks/webserver/routes/index.js';
import mongodbConnection from './frameworks/database/mongoDB/connection.js';

const app = express();
const server = http.createServer(app);

expressConfig(app);

mongodbConnection(mongoose, configs);

routes(app, express, configs);

serverConfig(server, configs).startServer();
