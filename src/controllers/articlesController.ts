import { Request, Response } from 'express';
// import { PrismaClient } from '../../node_modules/.prisma/client.ts';
// import { PrismaClient } from '../../node_modules/.prisma/client/default.js';
import { PrismaClient } from '@prisma/client';
import { Article } from '../../prisma/types.ts';
const prisma: PrismaClient = new PrismaClient();

/**
 * Interface for the response object
 */
interface ClientResponse {
  meta: {
    count: number
    title: string
    url: string
  },
  data: Article[]
}

/**
 * Function to get all people
 * @param req {Request} - The Request object
 * @param res {Response} - The Response object
 * @returns {Promise<void>}
 */
export async function getClients(req: Request, res: Response): Promise<void> {
  const articles: Article[] = await prisma.client.findMany();
  const clientReponse: ClientResponse = {
    meta: {
      count: articles.length,
      title: 'All articles',
      url: req.url
    },
    data: articles
  };
  res.status(200).send(clientReponse);
}

/**
 * Function to get a person by id
 * @param req {Request} - The Request object
 * @param res {Response} - The Response object
 * @returns {Promise<void>}
 */
export async function getClient(req: Request, res: Response): Promise<void> {
  const id: number = parseInt(req.params.id);
  const article: Article = await prisma.client.findUnique({
    where: {
      id: id
    }
  });
  res.status(200).send(article);
}
