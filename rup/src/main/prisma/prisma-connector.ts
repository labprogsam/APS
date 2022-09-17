import 'dotenv/config';
import { PrismaClient } from '@prisma/client';

class PrismaConnector {
  private readonly url: string = `postgresql://${process.env.DATABASE_USERNAME}:${process.env.DATABASE_PASSWORD}@${process.env.DATABASE_HOST}:${process.env.DATABASE_PORT}/${process.env.DATABASE_NAME}?schema=public`;
  client: null | PrismaClient = null;

  connect(url?: string): PrismaClient {
    if (this.client === null) {
      this.client = new PrismaClient({
        datasources: {
          db: {
            url: url || this.url,
          },
        },
      });
    }

    return this.client;
  }

  async disconnect(): Promise<void> {
    if (this.client !== null) {
      await this.client.$disconnect();
    }
  }
}

const prismaConnector = new PrismaConnector();

export { prismaConnector };
