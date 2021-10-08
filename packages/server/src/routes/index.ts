import { Router } from "express";
import * as hello from "../controllers/hello";

const router = Router();

router.get('/hello', hello.get);

export default router;