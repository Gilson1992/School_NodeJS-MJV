import { Request, Response, Router } from "express";

const router = Router();

router.get('/hello', (req: Request, res: Response) => {
    const helloWorld = { message: 'Aplicacao funcionando com sucesso' }
    res.send(helloWorld);
});

export default router;