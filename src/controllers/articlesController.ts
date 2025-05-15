import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { Article } from '../../prisma/types.js';
const prisma: PrismaClient = new PrismaClient();

/**
 * Interface for the response object
 */
interface ArticleResponse {
  meta: {
    count?: number
    title: string
    url: string
  },
  data: string[] | Article
}

/**
 * Function to get all people
 * @param req {Request} - The Request object
 * @param res {Response} - The Response object
 * @returns {Promise<void>}
 */
export async function getArticles(req: Request, res: Response): Promise<void> {
  const articles: Article[] = await prisma.article.findMany({
  });

  const articleUrls: string[] = articles.map((article: Article) => {
    return `/articles/${article.id}`;
  });

  const clientReponse: ArticleResponse = {
    meta: {
      count: articleUrls.length,
      title: 'All articles',
      url: req.url
    },
    data: articleUrls
  };
  res.status(200).send(clientReponse);
}

/**
 * Function to get a person by id
 * @param req {Request} - The Request object
 * @param res {Response} - The Response object
 * @returns {Promise<void>}
 */
export async function getArticle(req: Request, res: Response): Promise<void> {
  const id: number = parseInt(req.params.id);
  const article: Article = await prisma.article.findUnique({
    where: {
      id: id
    }
  });
  const clientReponse: ArticleResponse = {
    meta: {
      title: 'One specific article',
      url: req.url
    },
    data: article
  };
  res.status(200).send(clientReponse);
}
