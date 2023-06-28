import { Router } from 'express';

export default function postRoutes(express, configs) {
  const router: Router = express.Router();

  router.route('/').get();

  return router;
}
