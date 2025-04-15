/**
 * This file contains all the types that are used in the application
 *
 * It is a bit of a redundant file, because most of the types come from
 * the prima model. However, in this way we have more control over the
 * types that are used in the application. For example we want the id and
 * the createdAt field to be optional, it is genereated by Prisma.
 */

interface Article {
  id?: number,
  createdAt?: Date,
  title: string,
  author: string,
  date: string,
  category: Category[]
  tags: TagsOnPosts[]
  image: string
  intro: string
}

interface Category {
  id?: number,
  createdAt?: Date,
  name: string,
}

interface TagsOnPosts {
  tagId: number,
  articleId: number,
  assignedAt?: Date,
}

interface Tag {
  id?: number,
  createdAt?: Date,
  name: string,
  articles?: Article[]
}

export { Article, Category, TagsOnPosts, Tag };
