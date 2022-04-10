let numcards = 0;
const setCards = [];
const cards = [];
let cont = 0;
let moves = 0;
let trigger = 0;
let timer = 0;

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
    document.querySelector(".conteiner").innerHTML += `<div onclick=${setCards[i].onclick}><div class=${setCards[i].class} ><img class="front" src=${setCards[i].imgfront} /><img class="back" src=${setCards[i].imgback} /></div></div>`;
    console.log(setCards[i].imgback+" embaralhado");
}

const myinterval = setInterval(time, 1000);

function comparador(){
    return Math.random() - 0.5;
}

function time(){
    document.querySelector(".time-alert").innerHTML = timer++;
}

function turn_card(parrot){
    console.log(parrot.querySelector(".hidden"));
    if(parrot.querySelector(".hidden") === null){
        moves++;
        if(cont === 0){
            parrot.firstChild.classList.toggle("hidden");
            cards.push(parrot);
            cont = 1;
        }else if(cont === 1){
            parrot.firstChild.classList.toggle("hidden");
            remove_onclick();
            setTimeout(add_onclick, 1300);
            cards.push(parrot);
            cont = 0;
            if(cards[cards.length - 2].innerHTML === cards[cards.length - 1].innerHTML){
                console.log("é par");
                trigger++;
                if(trigger === setCards.length / 2){
                    setTimeout(gameOver, 600);
                }
            }else{
                setTimeout(untap, 1000);
                console.log("Não é par!");
                function untap(){
                    cards[cards.length - 2].firstChild.classList.toggle("hidden");
                    cards[cards.length - 1].firstChild.classList.toggle("hidden");
                }
            }
        }
    }
}

function remove_onclick(){
    let element = document.querySelectorAll(".conteiner > div");
    for(let i=0; i<element.length; i++){
        element[i].removeAttribute("onclick");
    }
    console.log(element);
}

function add_onclick(){
    let element = document.querySelectorAll(".conteiner > div");
    for(let i=0; i<element.length; i++){
        element[i].setAttribute("onclick", "turn_card(this)");
    }
    console.log(element);
}

function gameOver(){
    alert("fim de jogo!\nVocê ganhou em "+moves+" jogadas e em "+timer+" segundos!");
    clearInterval(myinterval);
    let restartGame = prompt("Deseja reiniciar o jogo?(sim/não)");
    while(restartGame !== "sim" && restartGame !== "não"){
        alert("Digite apenas 'sim' ou 'não'");
        restartGame = prompt("Deseja reiniciar o jogo?(sim/não)");
    }
    if(restartGame === "sim"){
        location.reload();
    }/*else if(restartGame === "não"){
        window.close();
    }*/
}