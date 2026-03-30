
let levelNumber = -1;

const levels = [
{
Image: "./img/imagem1.jpeg",
text: `<p>
No restaurante submarino, o ambiente está 
<select>
<option value="0">movimentado e cheio</option>
<option value="1">quase vazio</option>
<option value="2">com alguns clientes</option>
</select>. 

Bob Esponja aparece 
<select>
<option value="0">andando pelas mesas</option>
<option value="1">alegre e com o corpo elevado</option>
<option value="2">concentrado no trabalho</option>
</select>, equilibrando vários hambúrgueres em uma bandeja. 

Patrick está 
<select>
<option value="0">interagindo com outros personagens</option>
<option value="1">dançando</option>
<option value="2">pegando um hambúrguer no ar</option>
</select>. 

Os hambúrgueres estão 
<select>
<option value="0">nas mãos dos personagens</option>
<option value="1">dispersos no ar</option>
<option value="2">distribuídos nas mesas</option>
</select>, enquanto Lula Molusco demonstra 
<select>
<option value="0">indiferença</option>
<option value="1">tédio</option>
<option value="2">entusiasmo</option>
</select> ao atender no caixa. 

O piso 
<select>
<option value="0">verde</option>
<option value="1">azul</option>
<option value="2">marrom</option>
</select> reforça a sensação de festa no local.
</p>
</p>
`,
answers: "012101"
},
{
Image: "./img/imagem2.jpeg",
text: `A imagem mostra um quarto <select>
<option value="0">luxuoso</option>
<option value="1">simples</option>
<option value="2">abandonado</option>
</select> e colorido. No centro há uma cama de madeira <select>
<option value="0">azul</option>
<option value="1">verde</option>
<option value="2">amarela</option>
</select> com travesseiros e um cobertor em tons de amarelo e vermelho. Ao lado da cama há uma pequena mesa com alguns objetos, como uma <select>
<option value="0">televisão</option>
<option value="1">luminária</option>
<option value="2">jarra</option>
</select> e uma bacia, e duas cadeiras de madeira. No fundo do quarto há uma janela <select>
<option value="0">roxa</option>
<option value="1">verde</option>
<option value="2">vermelha</option>
</select> aberta. As paredes são azuis e possuem vários quadros pendurados. No chão há tábuas de madeira em tons rosados e marrons. Perto da cama há algumas roupas penduradas e, à direita da imagem, aparece uma porta <select>
<option value="0">vermelha</option>
<option value="1">amarela</option>
<option value="2">azul</option>
</select>. O quarto parece simples, organizado e acolhedor.`,
answers: "12212"
},
{
Image: "./img/imagem3.jpeg",
text: `A imagem mostra um grupo de <select>
<option value="0">animais</option>
<option value="1">adultos</option>
<option value="2">estudantes</option>
</select> e crianças descalços com roupas <select>
<option value="0">luxuosas</option>
<option value="1">simples</option>
<option value="2">coloridas</option>
</select> e expressões sérias. Alguns adultos usam <select>
<option value="0">chapéus</option>
<option value="1">óculos</option>
<option value="2">capacetes</option>
</select> e estão próximos das crianças, algumas no colo ou sendo seguradas pela mão. Eles estão em frente a uma estrutura de <select>
<option value="0">pedra</option>
<option value="1">metal</option>
<option value="2">madeira</option>
</select>, e ao fundo há janelas; em uma delas aparece uma mulher segurando um <select>
<option value="0">livro</option>
<option value="1">bebê</option>
<option value="2">cachorro</option>
</select>. Algumas pessoas também carregam pequenos embrulhos ou objetos nas mãos.`,
answers: "11021"
},
{
Image: "./img/imagem4.jpeg",
text: `<p>
A imagem mostra um 
<select>
<option value="0">parque urbano</option>
<option value="1">área industrial</option>
<option value="2">jardim botânico</option>
</select> com um lago de água lisa, atravessado por uma ponte de 
<select>
<option value="0">madeira</option>
<option value="1">plástico</option>
<option value="2">metal</option>
</select>. 

Ao redor, há gramados e árvores de 
<select>
<option value="0">copa esparsa</option>
<option value="1">sem folhas</option>
<option value="2">folhagem densa</option>
</select>. 

Próximo ao lago, aparecem flores 
<select>
<option value="0">vermelhas</option>
<option value="1">rosas</option>
<option value="2">roxas</option>
</select>. 

A água reflete parcialmente o céu, que está 
<select>
<option value="0">roxo</option>
<option value="1">alaranjado</option>
<option value="2">azul-claro</option>
</select> e 
<select>
<option value="0">nublado</option>
<option value="1">chuvoso</option>
<option value="2">sem nuvens</option>
</select>.
</p>`,
answers: "022121"
},
{
Image: "./img/imagem5.jpeg",
text: `A imagem mostra uma <select>
<option value="0">cozinha</option>
<option value="1">sala de estar</option>
<option value="2">garagem</option>
</select> em desenho. Uma <select>
<option value="0">criança</option>
<option value="1">mulher</option>
<option value="2">homem</option>
</select> está sentada no sofá <select>
<option value="0">vermelho</option>
<option value="1">verde</option>
<option value="2">bege</option>
</select>, segurando uma caneca. Na frente há uma mesa com um livro aberto, celular, óculos e uma tigela de <select>
<option value="0">frutas</option>
<option value="1">salgadinhos</option>
<option value="2">sopa</option>
</select>. No chão há um tapete, um travesseiro, meias e uma revista um pouco fora do lugar.
Atrás do sofá existe uma estante com livros, plantas e objetos decorativos, além de um <select>
<option value="0">quadro</option>
<option value="1">televisor</option>
<option value="2">espelho</option>
</select> na parede e uma planta grande, deixando o ambiente levemente bagunçado`,
answers: "11210"
},
{
Image: "./img/imagem6.jpeg",
text: `A imagem mostra o interior de uma casa na árvore feita de <select>
<option value="0">metal</option>
<option value="1">plástico</option>
<option value="2">madeira</option>
</select>, com vários objetos espalhados, como livros, brinquedos e pôsteres nas paredes. Em uma prateleira há um pequeno dinossauro de brinquedo <select>
<option value="0">vermelho</option>
<option value="1">roxo</option>
<option value="2">verde</option>
<option value="3">azul</option>
<option value="4">marrom</option>
</select>, além de uma cesta amarela e uma mochila verde.

No centro está um homem sem camisa, usando apenas uma cueca <select>
<option value="0">preta</option>
<option value="1">branca</option>
<option value="2">azul</option>
<option value="3">vermelha</option>
<option value="4">cinza</option>
</select> e uma capa vermelha com <select>
<option value="0">estrelas</option>
<option value="1">triângulos</option>
<option value="2">bolinhas</option>
<option value="3">raios</option>
</select> pretas.

À frente dele estão dois garotos. À esquerda há um menino com cabelo <select>
<option value="0">redondo</option>
<option value="1">pontiagudo</option>
<option value="2">quadrado</option>
<option value="3">desarrumado</option>
<option value="4">oval</option>
</select>. Ao lado dele está um menino <select>
<option value="0">moreno</option>
<option value="1">loiro</option>
<option value="2">ruivo</option>
<option value="3">castanho</option>
</select> usando camiseta verde com listras <select>
<option value="0">verticais</option>
<option value="1">diagonais</option>
<option value="2">horizontais</option>
<option value="3">cruzadas</option>
</select>.`,
answers: "2212212"
},
];

const passbutton = document.querySelector("#pass-form");
const textbox = document.querySelector("#describing-form-text");
const img = document.getElementById("img");
const mask = document.getElementById("mask");
let counting = 15;
function pass(){

levelNumber++;

if(levelNumber >= levels.length){
    document.getElementById("music").pause()
   
 window.location.href = "final.html"
}

img.src = levels[levelNumber].Image;

textbox.innerHTML = levels[levelNumber].text;

img.style.display = "block";
mask.style.display = "block";

img.style.opacity = "1";
mask.style.opacity = "1";

startTimer()
start();
}

function start(){
    document.getElementById("music").play()
     document.getElementById("music").volume = 0.4

passbutton.style.margin = "0 -170px 0 0";

setTimeout(() => {

img.style.opacity = "0";
mask.style.opacity = "0";

setTimeout(() => {

img.style.display = "none";
mask.style.display = "none";

},1000);

},10000);

}

function verValores(){

let selects = document.querySelectorAll("select");
let respostas = levels[levelNumber].answers;

passbutton.style.margin = "0 -60px 0 0";

let i = 0;

let interval = setInterval(()=>{

    if(i >= selects.length){
        clearInterval(interval);
        return;
    }

    let s = selects[i];

    if(s.value === respostas[i]){
        s.style.border = "3px solid green";
        document.getElementById("acerto").play()
    } 
    else{
        s.style.border = "3px solid red";
        document.getElementById("erro").play()
    }

    i++;

},1500);

}
let timerInterval;

function startTimer(){

counting = 10;
document.getElementById("timer").textContent = counting;
document.getElementById("tictac").play()
timerInterval = setInterval(()=>{

counting--;
document.getElementById("timer").textContent = counting;
if(counting <= 3){
    document.getElementById("timer").style.background = "rgba(233, 0, 0, 0.3)"
}


if(counting <= 0){
    document.getElementById("timer").style.background = "rgba(255, 255, 255, 0.3)"
    document.getElementById("tictac").pause()
    tictac.currentTime = 0
clearInterval(timerInterval);
}

},1000);

}
pass()
window