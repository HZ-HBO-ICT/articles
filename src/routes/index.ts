import Express, { Router, Response, NextFunction } from 'express';
import { getArticle, getArticles } from '../controllers/articlesController.ts';
const router: Router = Express.Router();

// router.get('/', (req: Request, res: Response, next: NextFunction) => {
//   res.json('hi');
//   next();
// });

router.get('/', (res: Response): void => {
  res.json({
    message: 'Welcome to the API',
    version: '1.0.0',
  });
});

router.get('/articles', getArticles);
router.get('/articles/:id', getArticle);

export default router;
