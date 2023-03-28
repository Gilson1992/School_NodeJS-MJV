import { Request, Response, Router } from "express";
import helloWorld from './helloWorld';

const router = Router();

router.use('/hello', helloWorld);

export default router;