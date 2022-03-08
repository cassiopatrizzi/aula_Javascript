// if - else
var idade = prompt("Qual sua idade?");
if (idade >= 18){
    alert("maior de idade")
} else {
    alert("menor de idade")
}

// while
var count = 0;
while(count < 5) {
    alert(count);
    count++;
}

// for
var count;
for(count = 0; count <=5; count++) {
    alert(count);
}

// Array
var nome = "Cássio Patrizzi";
var idade = 45;
var idade2 = 20;
var frase = "Japão é o melhor time do mundo!";
//alert(nome + " tem " + idade + " anos.");
//alert(idade + idade2);
console.log(nome);
console.log(idade + " anos");
console.log(frase.replace("Japão", "Brasil"));
console.log(frase.toLocaleUpperCase());
console.log(frase.toLowerCase());
//alert(frase.replace("Japão", "Brasil"));

var lista = ["maçã", "pêra", "laranja"];
lista.push("uva");
lista.pop();
console.log(lista.length);
console.log(lista.reverse());
console.log(lista.toString());
console.log(lista.join(" "));
console.log(lista);
console.log(lista[1]);
alert(lista[1]);

var fruta = {nome: "maçã", cor: "vermelha"}
console.log(fruta.nome);
alert(fruta.cor);

var frutas = [{nome: "maçã", cor: "vermelha"}, {nome: "uva", cor: "roxa"}]
console.log(frutas);
alert(frutas[1].nome);


// data
var d = new Date();
alert(d);
alert(d.getMonth() + 1);
alert(d.getDay());
alert(d.getHours());
alert(d.getMinutes());

function soma(n1, n2) {
    return n1 + n2;
}

function setReplace(frase, nome, novo_nome) {
    return frase.replace(nome, novo_nome);
}

var validar = 0;
function validaIdade(idade) {
    if(idade >= 18) {
        validar = true
    } else {
        validar = false
    }
    return validar;
}
var idade = prompt("Qual sua idade?");
validaIdade(idade);
console.log(validar);

alert(soma(5, 10));
alert(setReplace("Vai Japão", "Japão", "Brasil"));*/

function clicou() {
    document.getElementById("agradecimento").innerHTML = "<b>Redirecionar para o canal Zarp - clique aqui</b>";
    //console.log(document.getElementById("agradecimento")
    //alert("Obrigado por clicar");
}

function redirecionar() {
    window.open("https://www.youtube.com/results?search_query=zarpsystem");
    //window.location.href = "https://www.youtube.com/results?search_query=zarpsystem";
}

function trocar(elemento) {
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    //alert("trocar texto");
    elemento.innerHTML = "Obrigado por passar o mouse"
}

function voltar(elemento) {
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";
}

function load() {
    alert("Página carregada")
}

function funcaoChange(elemento) {
    console.log(elemento.value)
}
