    function buscaRegiao() {
        fetch("https://servicodados.ibge.gov.br/api/v1/localidades/regioes")
            .then(response => response.json())
            .then(regioes => {
                const selectRegiao = document.getElementById("região");
                regioes.forEach(regiao => {
                    selectRegiao.innerHTML += `<option value="${regiao.id}">${regiao.nome}</option>`;
                });
            })
    }


    function buscaEstados() {
        const regiaoId = document.getElementById("região").value;
        if (!regiaoId) return;

        fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/regioes/${regiaoId}/estados`)
            .then(response => response.json())
            .then(estados => {
                const selectEstado = document.getElementById("estado");
                selectEstado.innerHTML = '<option value="">Selecione</option>';
                estados.forEach(estado => {
                    selectEstado.innerHTML += `<option value="${estado.id}">${estado.nome}</option>`;
                });
            })
    }

    function buscaCidades() {
        const estadoId = document.getElementById("estado").value;
        if (!estadoId) return;

        fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estadoId}/municipios`)
            .then(response => response.json())
            .then(cidades => {
                const selectCidade = document.getElementById("cidade");
                selectCidade.innerHTML = '<option value="">Selecione</option>';
                cidades.forEach(cidade => {
                    selectCidade.innerHTML += `<option value="${cidade.id}">${cidade.nome}</option>`;
                });
            })
    }

    buscaRegiao();
