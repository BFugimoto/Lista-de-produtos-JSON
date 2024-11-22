fetch("dados.json")
    .then(response => response.json())
    .then(data => {
        const lista = document.getElementById("lista");
        let html = "";

        data.produtos.forEach(produto => {
            html += `
                <div class="produto">
                    <p class="nome"><strong>${produto.nome}</strong></p>
                    <p class="preco"><strong>Preço:</strong> <span>R$</span> ${produto.preco}</p>
                    <p class="descricao"><strong>Descrição:</strong> ${produto.descricao}</p>
                </div>
            `;
        });

        lista.innerHTML = html;
    })
    .catch(error => console.error("Erro ao carregar o JSON", error));