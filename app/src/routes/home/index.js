import express from 'express';
import * as ctrl from './home.ctrl.js';

const router = express.Router();

router.get("/", ctrl.output.home);
router.get("/login", ctrl.output.login);
router.get("/register", ctrl.output.register);
router.post("/login", ctrl.process.login);

export default router;