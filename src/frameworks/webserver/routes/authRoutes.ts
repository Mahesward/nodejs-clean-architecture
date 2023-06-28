import { Router } from 'express';

export default function userRouter(express, configs) {
  const router: Router = express.Router();

  router.route('/login').post();

  return router;
}
