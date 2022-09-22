"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prismaConnector = void 0;
require("dotenv/config");
const client_1 = require("@prisma/client");
class PrismaConnector {
    url = `postgresql://${process.env.SERVICE_ATIVIDADE_DATABASE_USERNAME}:${process.env.SERVICE_ATIVIDADE_DATABASE_PASSWORD}@${process.env.SERVICE_ATIVIDADE_DATABASE_HOST}:${process.env.SERVICE_ATIVIDADE_DATABASE_PORT}/${process.env.SERVICE_ATIVIDADE_DATABASE_NAME}?schema=public`;
    client = null;
    connect(url) {
        if (this.client === null) {
            this.client = new client_1.PrismaClient({
                datasources: {
                    db: {
                        url: url || this.url,
                    },
                },
            });
        }
        return this.client;
    }
    async disconnect() {
        if (this.client !== null) {
            await this.client.$disconnect();
        }
    }
}
const prismaConnector = new PrismaConnector();
exports.prismaConnector = prismaConnector;
//# sourceMappingURL=prisma-connector.js.map