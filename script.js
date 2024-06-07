function criarTabela() {
    // Seleciona onde vai ser criado o elemento
    const paiDivTabelas = document.getElementById('body_tabelas');

    // Cria uma div para tabela
    const divTabela = document.createElement('div');
    divTabela.className = 'tabela';
    
    // Insere a div dentro do pai
    paiDivTabelas.appendChild(divTabela);

    // Cria um elemento de texto para o título da tabela
    const h4Tabela = document.createElement('h4');
    h4Tabela.innerText = "Aluno ";

    // Insere o título da tabela na div
    divTabela.appendChild(h4Tabela);

    // Cria a tabela de usuários
    const tabela = document.createElement('table');
    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');

    // Elementos do thead
    const thNome = document.createElement('th');
    const thMatricula = document.createElement('th');
    const thNota1 = document.createElement('th');
    const thNota2 = document.createElement('th');
    const thMedia = document.createElement('th');
    const thSituacao = document.createElement('th');


    thNome.innerText = 'NOME ';
    thMatricula.innerText = 'MATRÍCULA ';
    thNota1.innerText = 'NOTA 1';
    thNota2.innerText = 'NOTA 2';
    thMedia.innerText = 'MÉDIA ';
    thSituacao.innerText = 'SITUAÇÃO';


    // Inserir os ths no thead
    thead.appendChild(thNome);
    thead.appendChild(thMatricula);
    thead.appendChild(thNota1);
    thead.appendChild(thNota2);
    thead.appendChild(thMedia);
    thead.appendChild(thSituacao);


    // Inserir o thead na tabela
    tabela.appendChild(thead);
    // Inserir o tbody na tabela
    tabela.appendChild(tbody);

    // Inserir a tabela na div
    divTabela.appendChild(tabela);

    // Pegar os valores do formulário
    const nome = document.getElementById('nome').value;
    const matricula = document.getElementById('matricula').value;
    const nota1 = parseFloat(document.getElementById('nota1').value);
    const nota2 = parseFloat(document.getElementById('nota2').value);
    const media = (nota1 + nota2) / 2;
    
            // situação do aluno
            let situacao;
            if (media > 5) {
                situacao = 'Aprovado';
            } else {
                situacao = 'Reprovado';
            }




    // Cria uma nova linha na tabela
    const novaLinha = document.createElement('tr');

    // Cria células para cada valor
    const tdNome = document.createElement('td');
    tdNome.innerText = nome;
    const tdMatricula = document.createElement('td');
    tdMatricula.innerText = matricula;
    const tdNota1 = document.createElement('td');
    tdNota1.innerText = nota1;
    const tdNota2 = document.createElement('td');
    tdNota2.innerText = nota2;
    const tdMedia = document.createElement('td');
    tdMedia.innerText = media.toFixed(2); // Coloca só duas casas decimais
    const tdSituacao = document.createElement('td');
    tdSituacao.innerText = situacao;


    // Adicionar células à linha
    novaLinha.appendChild(tdNome);
    novaLinha.appendChild(tdMatricula);
    novaLinha.appendChild(tdNota1);
    novaLinha.appendChild(tdNota2);
    novaLinha.appendChild(tdMedia);
    novaLinha.appendChild(tdSituacao);


    // Adicionar a linha ao tbody da tabela
    tbody.appendChild(novaLinha);
}
