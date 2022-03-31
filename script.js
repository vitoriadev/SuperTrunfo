let carta1 = {
    nome: "Klaus Mikaelson",
    imagem: "https://i.pinimg.com/originals/b1/dd/66/b1dd6677c175e2af7d7c6467d31c46d5.jpg",
    atributos: {
        ataques: 10,
        magia: 10,
        defesa: 9
    }
}
let carta2 = {
    nome: "Damon Salvatore",
    imagem: "https://ae01.alicdn.com/kf/HTB1E5G2KFXXXXXNXpXXq6xXFXXXl/P1138-12x16-The-Vampire-Diaries-Blood-Damon-Salvatore-Ian-Somerhal-Movie-Series-Star-posters-Printed.jpg_Q90.jpg_.webp",
    atributos: {
        ataques: 8,
        magia: 0,
        defesa: 8
    }
}
let carta3 = {
    nome: "Tayler Lockwood",
    imagem: "https://i.pinimg.com/736x/26/78/d1/2678d16002598670f6f640afa2f2f677--season--monster.jpg",
    atributos: {
        ataques: 10,
        magia: 0,
        defesa: 9
    }
}
let carta4 = {
    nome: "Bonnie Bennet",
    imagem: "https://i.pinimg.com/originals/ca/6a/c2/ca6ac21238f1b9b7d5ccbe71cea3b5f4.jpg",
    atributos: {
        ataques: 6,
        magia: 10,
        defesa: 9
    }
}
let carta5 = {
    nome:"Alaric Saltzman",
    imagem:"http://pm1.narvii.com/7303/a4d93c8be3678bd9694775b8535aff197fff0de7r1-640-800v2_uhq.jpg",
    atributos: {
        ataques: 10,
        magia: 0,
        defesa: 9
    }
}
let carta6 = {
    nome:"Caroline Forbes",
    imagem:"https://www.estrelando.com.br/uploads/2015/05/13/fto_ft1_275122.gallery.jpg",
    atributos: {
        ataques: 6,
        magia: 2,
        defesa: 8
    }
}

let cartas = [carta1, carta2, carta3, carta4, carta5,carta6 ]
let cartaMaquina;
let cartaJogador;

function sortearCarta() {
    var numeroCartaMaquina = parseInt(Math.random() * 6);
    cartaMaquina = cartas[numeroCartaMaquina];
  
    var numeroCartaJogador = parseInt(Math.random() * 6);
    while (numeroCartaJogador == numeroCartaMaquina) {
      numeroCartaJogador = parseInt(Math.random() * 6);
    }
    cartaJogador = cartas[numeroCartaJogador];
    console.log(cartaJogador);
  
    document.getElementById("btnSortear").disabled = true;
    document.getElementById("btnJogar").disabled = false;
    exibirCartaJogador();
  }
  
  function obtemAtributoSelecionado() {
    var radioAtributo = document.getElementsByName("atributo");
    for (var i = 0; i < radioAtributo.length; i++) {
      if (radioAtributo[i].checked) {
        return radioAtributo[i].value;
      }
    }
  }
  
  function jogar() {
    console.log("chamou");
    var atributoSelecionado = obtemAtributoSelecionado();
    var divResultado = document.getElementById("resultado");
  
    if (
      cartaJogador.atributos[atributoSelecionado] >
      cartaMaquina.atributos[atributoSelecionado]
    ) {
      htmlResultado = "<p class='resultado-final'>Venceu</p>";
    } else if (
      cartaJogador.atributos[atributoSelecionado] <
      cartaMaquina.atributos[atributoSelecionado]
    ) {
      htmlResultado = "<p class='resultado-final'>Perdeu</p>";
    } else {
      htmlResultado = "<p class='resultado-final'>Empatou</p>";
    }
    divResultado.innerHTML = htmlResultado;
  
    document.getElementById("btnJogar").disabled = true;
    exibirCartaMaquina();
  }
  
  function exibirCartaJogador() {
    var divCartaJogador = document.getElementById("carta-jogador");
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;
    var moldura =
      '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    var tagHTML = "<div id='opcoes' class='carta-status'>";
  
    var opcoesTexto = "";
    for (var atributo in cartaJogador.atributos) {
      opcoesTexto +=
        "<input type='radio' name='atributo' value='" +
        atributo +
        "'>" +
        atributo +
        " " +
        cartaJogador.atributos[atributo] +
        "<br>";
    }
    var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`;
  
    divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
  }
  
  function exibirCartaMaquina() {
    var divCartaMaquina = document.getElementById("carta-maquina");
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;
    var moldura =
      '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    var tagHTML = "<div id='opcoes' class='carta-status'>";
  
    var opcoesTexto = "";
    for (var atributo in cartaMaquina.atributos) {
      opcoesTexto +=
        "<p type='text' name='atributo' value='" +
        atributo +
        "'>" +
        atributo +
        " " +
        cartaMaquina.atributos[atributo] +
        "</p>";
    }
    var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`;
  
    divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}