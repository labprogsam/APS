"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.atividadeRepository = exports.AtividadeRepository = void 0;
const prisma_connector_1 = require("../main/prisma/prisma-connector");
class AtividadeRepository {
    static _instance;
    prismaConnection;
    constructor() {
        this.prismaConnection = prisma_connector_1.prismaConnector.connect();
    }
    static getInstance() {
        return this._instance || (this._instance = new this());
    }
    async verAtividades() {
        const atividades = await this.prismaConnection.atividade.findMany();
        return atividades;
    }
    async criarAtividade(atividade) {
        await this.prismaConnection.atividade.create({
            data: atividade
        });
    }
    async verAtividadePorId(id) {
        const atividade = this.prismaConnection.atividade.findFirst({
            where: {
                id
            }
        });
        return atividade;
    }
    async editarAtividade(atividade) {
        const { id, ...restOfParams } = atividade;
        await this.prismaConnection.atividade.update({
            where: { id },
            data: restOfParams
        });
    }
    async excluirAtividade(id) {
        await this.prismaConnection.atividade.delete({
            where: {
                id
            }
        });
    }
}
exports.AtividadeRepository = AtividadeRepository;
exports.atividadeRepository = AtividadeRepository.getInstance();
//# sourceMappingURL=atividade.repository.js.map