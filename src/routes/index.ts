import Express, { Router, Response, NextFunction } from 'express';
import { getArticle, getArticles } from '../controllers/articlesController.ts';
import { getTags, getTag } from '../controllers/tagsController.ts';
import { authenticateToken } from '../middleware/authentication/authenticationHandler.ts';
import Cors from 'cors';
const router: Router = Express.Router();

router.get('/', (req: Express.Request, res: Response, next: NextFunction): void => {
  res.status(200).json({
    message: 'Welcome to the API',
    version: '1.0.0',
  });
});

router.get('/articles', getArticles);
router.get('/articles/:id', getArticle);
router.get('/tags', Cors(), getTags);
router.get('/tags/:id', Cors(), authenticateToken, getTag);

export default router;
