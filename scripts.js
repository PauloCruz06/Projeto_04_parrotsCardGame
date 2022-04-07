let numcards = 0;
const setCards = [];
let cont = 0;

numcards =  Number(prompt("Com quantas cartas você quer jogar?\nVálido somente números pares de 4 à 14."));

while (numcards%2 !== 0 || numcards < 4 || numcards > 14){
    alert("número de cartas inválido!");
    numcards =  Number(prompt("Com quantas cartas você quer jogar?\nVálido somente números pares de 4 à 14."));
}

for(let i=0; i<2; i++){
    for(let j=1; j<=numcards/2; j++){
        setCards[cont] = `<div class="card" onclick="turn_card(this)"><img src="./images/front.png"/><img class="hidden" src="./images/parrot_${j}.gif"</div>`;
        console.log(setCards[cont]+" criado");
        cont++;
    }
}


for(let i=0; i<setCards.length; i++){
    setCards.sort(comparador);
    document.querySelector(".conteiner").innerHTML += setCards[i];
    console.log(setCards[i]+" embaralhado");
}

function comparador(){
    return Math.random() - 0.5;
}

function turn_card(parrot){
    parrot.firstChild.classList.toggle("hidden");
    parrot.lastChild.classList.toggle("hidden");  
}