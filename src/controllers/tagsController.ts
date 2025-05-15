import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { Tag } from '../../prisma/types.js';
const prisma: PrismaClient = new PrismaClient();

/**
 * Interface for the response object
 */
interface TagResponse {
  meta: {
    count?: number
    title: string
    url: string
  },
  data: string[] | Tag
}

/**
 * Function to get all people
 * @param req {Request} - The Request object
 * @param res {Response} - The Response object
 * @returns {Promise<void>}
 */
export async function getTags(req: Request, res: Response): Promise<void> {
  const tags: Tag[] = await prisma.tag.findMany({
  });

  const articleUrls: string[] = tags.map((tag: Tag) => {
    return `/tags/${tag.id}`;
  });

  const clientReponse: TagResponse = {
    meta: {
      count: articleUrls.length,
      title: 'All tags',
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
export async function getTag(req: Request, res: Response): Promise<void> {
  const id: number = parseInt(req.params.id);
  const tag: Tag = await prisma.tag.findUnique({
    where: {
      id: id
    }
  });
  const clientReponse: TagResponse = {
    meta: {
      title: 'One specific tag',
      url: req.url
    },
    data: tag
  };
  res.status(200).send(clientReponse);
}
