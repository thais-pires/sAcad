class DisciplinaControlador {

    constructor() {
        this.servico = new DisciplinaService();
    }

    inserir() {
        const nome = document.querySelector("#nome");
        const codigo = document.querySelector("#codigo");

        const disciplinaInserida = this.servico.inserir(nome.value, codigo.value);
        
        const listaDisciplinasElemento = document.querySelector("#listaDisciplinas");
        if (disciplinaInserida) {
            this.inserirdisciplinaNoHtml(disciplinaInserida, listaDisciplinasElemento);
        }
    }

    inserirdisciplinaNoHtml(disciplina, elementoDestino) {
        const disciplinaElemento = document.createElement("li");
        disciplinaElemento.textContent = `Nome: ${disciplina.nome} - Código: ${disciplina.codigo}`;
        elementoDestino.appendChild(disciplinaElemento);
    }

}
