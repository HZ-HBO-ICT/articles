import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { Category } from '../../prisma/types.js';
const prisma: PrismaClient = new PrismaClient();

/**
 * Interface for the response object
 */
interface CategoryResponse {
  meta: {
    count?: number
    title: string
    url: string
  },
  data: string[] | Category
}

/**
 * Function to get all people
 * @param req {Request} - The Request object
 * @param res {Response} - The Response object
 * @returns {Promise<void>}
 */
export async function getCategories(req: Request, res: Response): Promise<void> {
  const categories: Category[] = await prisma.category.findMany({
  });

  const categoryUrls: string[] = categories.map((category: Category) => {
    return `/category/${category.id}`;
  });

  const clientReponse: CategoryResponse = {
    meta: {
      count: categoryUrls.length,
      title: 'All tags',
      url: req.url
    },
    data: categoryUrls
  };
  res.status(200).send(clientReponse);
}

/**
 * Function to get a person by id
 * @param req {Request} - The Request object
 * @param res {Response} - The Response object
 * @returns {Promise<void>}
 */
export async function getCategory(req: Request, res: Response): Promise<void> {
  const id: number = parseInt(req.params.id);
  const tag: Category = await prisma.category.findUnique({
    where: {
      id: id
    }
  });
  const clientReponse: CategoryResponse = {
    meta: {
      title: 'One specific category',
      url: req.url
    },
    data: tag
  };
  res.status(200).send(clientReponse);
}
