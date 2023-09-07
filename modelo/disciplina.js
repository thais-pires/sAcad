class Disciplina {

    constructor(nome, codigo) {      
        this._nome = nome;
        this._codigo = codigo;
        this.alunos = [];
    }

    get nome() {
        return this._nome;
    }

    set nome(novoNome) {
        this._nome = novoNome;
    }

    get codigo() {
        return this._codigo;
    }

    set codigo(novoCodigo) {
        this._codigo = novoCodigo;
    }
}
