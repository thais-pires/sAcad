class AlunoRepositorio {

    constructor() {
        this.alunos = [];
    }

    inserir(aluno) {
        this.alunos.push(aluno);
    }

    remover(matricula) {
        const indxAlunoARemover = this.alunos.findIndex(aluno => aluno.matricula === matricula);
        if (indxAlunoARemover > -1) {
            this.alunos.splice(indxAlunoARemover, 1);
        }
    }

    listar() {
        return this.alunos;
    }

    buscar(matricula) {
        return this.alunos.find(aluno => aluno.matricula === matricula);
    }

    atualizar(aluno) {
        const indxAlunoAAtualizar = this.alunos.findIndex(aluno => aluno.matricula === matricula);
        if (indxAlunoAAtualizar > -1) {
            this.disciplinas[indxAlunoAAtualizar] = aluno;
        }
    }
}
