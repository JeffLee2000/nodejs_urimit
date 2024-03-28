import express from 'express';
import indexRouter from './src/routes/home/index.js';

// 모듈
const app = express();
const PORT = 3001;

// 라우팅
const home = indexRouter;
app.use('/', home);

// 앱 세팅
app.set("views", "./src/views");
app.set("view engine", "ejs");

export default app;