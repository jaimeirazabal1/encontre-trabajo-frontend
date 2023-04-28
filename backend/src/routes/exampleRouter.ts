import { Router } from 'express';
import ExampleController from '../controllers/exampleController';
import AuthMiddleware from '../middlewares/AuthMiddleware';

const router = Router();
router.use(AuthMiddleware.verifyToken);
router.get('/', ExampleController.getExample);
router.post('/create', ExampleController.createExample);

export default router;
