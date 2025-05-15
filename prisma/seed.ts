import { PrismaClient } from '@prisma/client';
// reference a type from the generated Prisma Client
// import type { Client } from '@prisma/client';
const prisma: PrismaClient = new PrismaClient();
import { Article, Category, Tag, TagsOnArticles } from './types.ts';

const tags: Tag[] = [
  { name: 'EV' },
  { name: 'Clean Energy' },
  { name: 'Automotive' },
  { name: 'Gardening' },
  { name: 'Urban Life' },
  { name: 'Sustainability' },
  { name: 'AI' },
  { name: 'Healthcare' },
  { name: 'Technology' },
  { name: 'Work' },
  { name: 'Remote' },
  { name: 'Digital Life' },
  { name: 'Climate' },
];

const categories: Category[] = [
  { name: 'Technology' },
  { name: 'Lifestyle' },
  { name: 'Health' },
  { name: 'Work' },
  { name: 'Environment' },
  { name: 'Culture' },
  { name: 'Fashion' },
  { name: 'Space' },
];

// if you use the model you have to fill in all the fields also the generated ones
const articles: Article[] = [
  {
    'title': 'The Rise of Electric Vehicles',
    'author': 'Jane Doe',
    'date': '2025-04-01',
    'categoryId': 1,
    'image': 'https://placebeard.it/400x200',
    'intro': 'Electric vehicles are transforming the automotive industry. Learn how innovation and environmental concerns are driving this shift.',
  },
  {
    'title': 'Urban Gardening: Growing Food in Small Spaces',
    'author': 'Mark Green',
    'date': '2025-03-28',
    'categoryId': 2,
    'image': 'https://placebeard.it/400x200',
    'intro': 'Discover how city dwellers are turning balconies and rooftops into lush, productive gardens.',
  },
  {
    'title': 'AI in Healthcare: A New Era of Medicine',
    'author': 'Dr. Sarah Lin',
    'date': '2025-03-20',
    'categoryId': 3,
    'image': 'https://placebeard.it/400x200',
    'intro': 'Artificial intelligence is revolutionizing diagnosis and treatment. This article explores its impact on patient care.',
  },
  {
    'title': 'Remote Work: The Future of Employment',
    'author': 'Alex Chen',
    'date': '2025-03-18',
    'categoryId': 4,
    'image': 'https://placebeard.it/400x200',
    'intro': 'As remote work becomes more common, companies and employees are navigating new opportunities and challenges.',
  },
  {
    'title': 'Climate Change and Coastal Cities',
    'author': 'Lena Reyes',
    'date': '2025-03-15',
    'categoryId': 5,
    'image': 'https://placebeard.it/400x200',
    'intro': 'Coastal cities face increasing risks from rising sea levels. Find out how communities are adapting.',
  },
  {
    'title': 'The Art of Minimalist Living',
    'author': 'Tom Blake',
    'date': '2025-03-10',
    'categoryId': 6,
    'image': 'https://placebeard.it/400x200',
    'intro': 'Minimalism is more than a trend—it\'s a lifestyle that promotes clarity and focus through simplicity.',
  },
  {
    'title': 'The Return of Vinyl Records',
    'author': 'Nina Kelly',
    'date': '2025-03-05',
    'categoryId': 7,
    'image': 'https://placebeard.it/400x200',
    'intro': 'Vinyl is back in vogue. We explore why this retro format is thriving in the digital age.',
  },
  {
    'title': 'Exploring the Metaverse',
    'author': 'Omar Singh',
    'date': '2025-03-01',
    'categoryId': 7,
    'image': 'https://placebeard.it/400x200',
    'intro': 'Step into the world of virtual reality and learn what the metaverse might mean for the future of online interaction.',
  },
  {
    'title': 'Sustainable Fashion: Changing the Industry',
    'author': 'Carla Brooks',
    'date': '2025-02-26',
    'categoryId': 7,
    'image': 'https://placebeard.it/400x200',
    'intro': 'The fashion industry is going green. Discover how brands and consumers are embracing sustainability.',
  },
  {
    'title': 'Space Tourism: The Final Frontier?',
    'author': 'Chris Vega',
    'date': '2025-02-22',
    'categoryId': 8,
    'image': 'https://placebeard.it/400x200',
    'intro': 'With private companies launching civilians into space, we explore the implications of space tourism.',
  }
];

const tagsOnArticles: TagsOnArticles[] = [
  { tagId: 1, articleId: 1 },
  { tagId: 2, articleId: 1 },
  { tagId: 3, articleId: 1 },
  { tagId: 1, articleId: 2 },
  { tagId: 2, articleId: 2 },
  { tagId: 5, articleId: 2 },
  { tagId: 2, articleId: 3 },
  { tagId: 3, articleId: 3 },
  { tagId: 6, articleId: 3 },
  { tagId: 1, articleId: 4 },
  { tagId: 2, articleId: 4 },
  { tagId: 3, articleId: 4 },
  { tagId: 4, articleId: 5 },
  { tagId: 5, articleId: 5 },
  { tagId: 6, articleId: 5 },
  { tagId: 4, articleId: 6 }
];

// first look if the exist in the database and then add them

const loadTags = async (): Promise<void> => {
  try {
    await prisma.tag.createMany({
      data: tags,
    });
    loadCategories();
    console.log('Added tags to the database');
  } catch (e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
};

const loadCategories = async (): Promise<void> => {
  try {
    await prisma.category.createMany({
      data: categories,
    });
    loadArticles();
    console.log('Added categories to the database');
  } catch (e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
};

const loadArticles = async (): Promise<void> => {
  try {
    await prisma.article.createMany({
      data: articles,
    });
    loadTagsAndArticles();
    console.log('Added articles to the database');
  } catch (e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
};

const loadTagsAndArticles = async (): Promise<void> => {
  try {
    await prisma.tagsOnArticles.createMany({
      data: tagsOnArticles,
    });
    console.log('Added Tags On Articles to the database');
  } catch (e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
};

loadTags();
