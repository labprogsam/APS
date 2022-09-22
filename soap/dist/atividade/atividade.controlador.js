"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ControladorAtividade = void 0;
const atividade_cadastro_1 = require("./atividade.cadastro");
class ControladorAtividade {
    cadastroAtividade;
    constructor(atividadeRepository) {
        this.cadastroAtividade = new atividade_cadastro_1.CadastroAtividade(atividadeRepository);
    }
    async verAtividades() {
        const atividades = await this.cadastroAtividade.verAtividades();
        return atividades;
    }
    async verAtividadePorId(id) {
        const atividade = await this.cadastroAtividade.verAtividadePorId(id);
        return atividade;
    }
    async criarAtividade(atividade) {
        await this.cadastroAtividade.criarAtividade(atividade);
    }
    async editarAtividade(atividade) {
        const atividadeJaExiste = await this.cadastroAtividade.verAtividadePorId(atividade.id);
        if (!atividadeJaExiste) {
            return;
        }
        await this.cadastroAtividade.editarAtividade({ ...atividadeJaExiste, ...atividade });
    }
    async excluirAtividade(id) {
        await this.cadastroAtividade.excluirAtividade(id);
    }
}
exports.ControladorAtividade = ControladorAtividade;
//# sourceMappingURL=atividade.controlador.js.map