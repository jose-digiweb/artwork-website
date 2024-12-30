import 'server-only';

import { Pool, neonConfig } from '@neondatabase/serverless';
import { PrismaNeon } from '@prisma/adapter-neon';
import { PrismaClient } from '@prisma/client';
import ws from 'ws';

neonConfig.webSocketConstructor = ws;

export type Artwork = {
  description: string;
  id: string;
  title: string;
  dimensions: string;
  size: string;
  imageUrl: string;
  thumbnailUrl: string;
  imageSecureUrl: string;
  imagePublicId: string;
  year: string;
  featured: boolean;
  createdAt: Date;
  updatedAt: Date;
};

declare global {
  var cachedPrisma: PrismaClient | undefined;
}

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaNeon(pool);

export const database = new PrismaClient({ adapter });
