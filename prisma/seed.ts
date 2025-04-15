import { PrismaClient } from '@prisma/client';
// reference a type from the generated Prisma Client
// import type { Client } from '@prisma/client';
const prisma: PrismaClient = new PrismaClient();
import { Article, Tag, TagsOnPosts } from './types.ts';

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
  { name: 'Tech' },
  { name: 'Fashion' },
];

// if you use the model you have to fill in all the fields also the generated ones
const articles: Article[] = [
  {
    'title': 'The Rise of Electric Vehicles',
    'author': 'Jane Doe',
    'date': '2025-04-01',
    'category': 'Technology',
    'image': 'https://placebeard.it/400x200',
    'intro': 'Electric vehicles are transforming the automotive industry. Learn how innovation and environmental concerns are driving this shift.',
    'tags': 'EV, Clean Energy, Automotive'
  },
  {
    'title': 'Urban Gardening: Growing Food in Small Spaces',
    'author': 'Mark Green',
    'date': '2025-03-28',
    'category': 'Lifestyle',
    'image': 'https://placebeard.it/400x200',
    'intro': 'Discover how city dwellers are turning balconies and rooftops into lush, productive gardens.',
    'tags': 'Gardening, Urban Life, Sustainability'
  },
  {
    'title': 'AI in Healthcare: A New Era of Medicine',
    'author': 'Dr. Sarah Lin',
    'date': '2025-03-20',
    'category': 'Health',
    'image': 'https://placebeard.it/400x200',
    'intro': 'Artificial intelligence is revolutionizing diagnosis and treatment. This article explores its impact on patient care.',
    'tags': 'AI, Healthcare, Technology'
  },
  {
    'title': 'Remote Work: The Future of Employment',
    'author': 'Alex Chen',
    'date': '2025-03-18',
    'category': 'Work',
    'image': 'https://placebeard.it/400x200',
    'intro': 'As remote work becomes more common, companies and employees are navigating new opportunities and challenges.',
    'tags': 'Work, Remote, Digital Life'
  },
  {
    'title': 'Climate Change and Coastal Cities',
    'author': 'Lena Reyes',
    'date': '2025-03-15',
    'category': 'Environment',
    'image': 'https://placebeard.it/400x200',
    'intro': 'Coastal cities face increasing risks from rising sea levels. Find out how communities are adapting.',
    'tags': 'Climate, Resilience, Urban Planning'
  },
  {
    'title': 'The Art of Minimalist Living',
    'author': 'Tom Blake',
    'date': '2025-03-10',
    'category': 'Lifestyle',
    'image': 'https://placebeard.it/400x200',
    'intro': 'Minimalism is more than a trend—it\'s a lifestyle that promotes clarity and focus through simplicity.',
    'tags': 'Minimalism, Design, Wellness'
  },
  {
    'title': 'The Return of Vinyl Records',
    'author': 'Nina Kelly',
    'date': '2025-03-05',
    'category': 'Culture',
    'image': 'https://placebeard.it/400x200',
    'intro': 'Vinyl is back in vogue. We explore why this retro format is thriving in the digital age.',
    'tags': 'Music, Retro, Culture'
  },
  {
    'title': 'Exploring the Metaverse',
    'author': 'Omar Singh',
    'date': '2025-03-01',
    'category': 'Tech',
    'image': 'https://placebeard.it/400x200',
    'intro': 'Step into the world of virtual reality and learn what the metaverse might mean for the future of online interaction.',
    'tags': 'VR, Metaverse, Futurism'
  },
  {
    'title': 'Sustainable Fashion: Changing the Industry',
    'author': 'Carla Brooks',
    'date': '2025-02-26',
    'category': 'Fashion',
    'image': 'https://placebeard.it/400x200',
    'intro': 'The fashion industry is going green. Discover how brands and consumers are embracing sustainability.',
    'tags': 'Ethical, Fashion, Environment'
  },
  {
    'title': 'Space Tourism: The Final Frontier?',
    'author': 'Chris Vega',
    'date': '2025-02-22',
    'category': 'Space',
    'image': 'https://placebeard.it/400x200',
    'intro': 'With private companies launching civilians into space, we explore the implications of space tourism.',
    'tags': 'Space, Exploration, Commercial Flight'
  }
];

const TagsOnPosts: TagsOnPosts[] = [
  { tagId: 1, articleId: 1 },
  { tagId: 2, articleId: 1 },
  { tagId: 3, articleId: 1 },
  { tagId: 4, articleId: 2 },
  { tagId: 5, articleId: 2 },
  { tagId: 6, articleId: 2 },
  { tagId: 7, articleId: 3 },
  { tagId: 8, articleId: 3 },
  { tagId: 9, articleId: 3 },
  { tagId: 10, articleId: 4 },
  { tagId: 11, articleId: 4 },
  { tagId: 12, articleId: 4 },
  { tagId: 13, articleId: 5 },
  { tagId: 14, articleId: 5 },
  { tagId: 15, articleId: 5 },
  { tagId: 16, articleId: 6 }
];

// first look if the exist in the database and then add them

const load = async (): Promise<void> => {
  try {
    await prisma.client.createMany({
      data: articles,
    });
    console.log('Added ar5ticles to the database');
  } catch (e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
};

load();
