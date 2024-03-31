import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import indexRouter from './src/routes/home/index.js';

// 모듈
const app = express();
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// 라우팅
const home = indexRouter;
app.use("/", home);

// 앱 세팅
app.set("views", "./src/views");
app.set("view engine", "ejs");
app.use(express.static(`${__dirname}/src/public`));

export default app;