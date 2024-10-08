var animes = [];
var qtdElementos = 0;

function guardarDados(event){
    var nome = document.getElementById("nome").value;
    var genero = document.getElementById("genero").options[document.getElementBy("genero").selectedIndex].innerHTML;
    var ano = document.getElementById("ano").value;
    var nota = document.getElementById("nota").value;

    animes.push ({
        'nome' : nome,
        'genero' : genero,
        'ano' : ano,
        'nota' : nota
    });

    event.preventDefault();

    limparDados();
    exibirAnimes();
}

function limparDados(){
    document.getElementById("nome").value = "";
    document.getElementById("genero").selectedIndex = "0";
    document.getElementById("ano").value = "";
    document.getElementById("nota").value = "";
}

function exibirAnimes(){
    var linha = document.createElement("tr");

    var data1 = document.createElement("td");
    data1.textContent = animes[qtdElementos].nome;
    linha.appendChild(data1);

    var data2 = document.createElement("td");
    data2.textContent = animes[qtdElementos].genero;
    linha.appendChild(data2);

    var data3 = document.createElement("td");
    data3.textContent = animes[qtdElementos].ano;
    linha.appendChild(data3);

    var data4 = document.createElement("td");
    data4.textContent = animes[qtdElementos].nota;
    linha.appendChild(data4);

    document.getElementById("animeTabela").appendChild(linha);

    qtdElementos++;
}