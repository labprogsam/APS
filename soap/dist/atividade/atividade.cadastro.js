"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CadastroAtividade = void 0;
class CadastroAtividade {
    atividadeRepository;
    constructor(atividadeRepository) {
        this.atividadeRepository = atividadeRepository;
    }
    async verAtividades() {
        const atividades = await this.atividadeRepository.verAtividades();
        return atividades;
    }
    async verAtividadePorId(id) {
        const atividade = await this.atividadeRepository.verAtividadePorId(id);
        return atividade;
    }
    async criarAtividade(atividade) {
        await this.atividadeRepository.criarAtividade(atividade);
    }
    async editarAtividade(atividade) {
        await this.atividadeRepository.editarAtividade(atividade);
    }
    async excluirAtividade(id) {
        await this.atividadeRepository.excluirAtividade(id);
    }
}
exports.CadastroAtividade = CadastroAtividade;
//# sourceMappingURL=atividade.cadastro.js.map