class Disciplina {

    constructor(nome, codigo) {
        this.codigo = codigo;
        this._nome = nome;
        this.alunos = [];
    }

    get nome() {
        return this._nome;
    }

    set nome(novoNome) {
        this._nome = novoNome;
    }

    get codigo() {
        return this.codigo;
    }

    set codigo(novoCodigo) {
        this.codigo = novoCodigo;
    }
}
