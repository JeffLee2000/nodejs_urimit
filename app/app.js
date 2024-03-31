import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import indexRouter from './src/routes/home/index.js';
import bodyParser from 'body-parser';

// 모듈
const app = express();
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// 라우팅
const home = indexRouter;

// 앱 세팅
app.set("views", "./src/views");
app.set("view engine", "ejs");
app.use(express.static(`${__dirname}/src/public`));
// URL을 통해 전달되는 데이터에 한글, 공백 등과 같은 문자가 포함될 경우 제대로 인식되지 않는 문제 해결
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", home); // use -> 미들 웨어를 등록해주는 메서드.

export default app;