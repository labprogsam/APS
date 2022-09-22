import 'dotenv/config';
import { PrismaClient } from '@prisma/client';

class PrismaConnector {
  private readonly url: string = `postgresql://${process.env.SERVICE_ATIVIDADE_DATABASE_USERNAME}:${process.env.SERVICE_ATIVIDADE_DATABASE_PASSWORD}@${process.env.SERVICE_ATIVIDADE_DATABASE_HOST}:${process.env.SERVICE_ATIVIDADE_DATABASE_PORT}/${process.env.SERVICE_ATIVIDADE_DATABASE_NAME}?schema=public`;
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
