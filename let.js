var exibirMensagem = () => {
    if(true) {
        var escopo = "Caelum";
        let escopoBloco = "Alura";

        console.log(escopoBloco) //Alura;
    }

    console.log(escopo); //Coelum
    console.log(escopoBloco); //Erro
}

exibirMensagem();