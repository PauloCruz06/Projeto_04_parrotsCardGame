let numcards = 0;
const setCards = [];
const cards = [];
let cont = 0;

numcards =  Number(prompt("Com quantas cartas você quer jogar?\nVálido somente números pares de 4 à 14."));

while (numcards%2 !== 0 || numcards < 4 || numcards > 14){
    alert("número de cartas inválido!");
    numcards =  Number(prompt("Com quantas cartas você quer jogar?\nVálido somente números pares de 4 à 14."));
}

for(let i=0; i<2; i++){
    for(let j=1; j<=numcards/2; j++){
        setCards[cont] = {class: "card", onclick: "turn_card(this)", imgfront: "./images/front.png", imgback: `./images/parrot_${j}.gif`};
        console.log(setCards[cont]+" criado");
        cont++;
    }
}

cont = 0;

setCards.sort(comparador);

for(let i=0; i<setCards.length; i++){
    document.querySelector(".conteiner").innerHTML += `<div class=${setCards[i].class} onclick=${setCards[i].onclick} ><img src=${setCards[i].imgfront} /><img class="hidden" src=${setCards[i].imgback} /></div>`;
    console.log(setCards[i].imgback+" embaralhado");
}

function comparador(){
    return Math.random() - 0.5;
}

function turn_card(parrot){
    console.log(parrot.querySelector(".hidden"));
    console.log(parrot.firstChild);
    if(parrot.querySelector(".hidden") === parrot.lastChild){
        if(cont === 0){
            parrot.firstChild.classList.add("hidden");
            parrot.lastChild.classList.remove("hidden");
            cards.push(parrot);
            cont = 1;
        }else if(cont === 1){
            parrot.firstChild.classList.add("hidden");
            parrot.lastChild.classList.remove("hidden");
            cards.push(parrot);
            cont = 0;
            if(cards[cards.length - 2].innerHTML === cards[cards.length - 1].innerHTML){
                console.log("é par");
            }else{
                cards[cards.length - 2].firstChild.classList.remove("hidden");
                cards[cards.length - 2].lastChild.classList.add("hidden");
                cards[cards.length - 1].firstChild.classList.remove("hidden");
                cards[cards.length - 1].lastChild.classList.add("hidden");
                console.log("Não é par!");
            }
        }
    }
}

