import morgan from 'morgan';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import { Express } from 'express';

export default function expressConfig(app: Express) {
  app.use(helmet());
  app.use(morgan('tiny'));
  app.use(bodyParser.json({ limit: '50mb' }));
  app.use(
    bodyParser.urlencoded({
      limit: '50mb',
      extended: true,
      parameterLimit: 50000,
    })
  );
}

