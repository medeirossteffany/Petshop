/*CRIANDO UM SLIDESHOW AUTOMÁTICO */

//DECLARANDO AS VARIAVEIS 

//ARRAY
let imagens=['img/slide1.png','img/slide2.png','img/slide3.png'];
//POSIÇÃO QUE VAI INICIAR 
let index =0;
//TEMPO DAS IMAGENS TROCAR
let time=3000;


//FUNÇÃO SLIDWSHOW
function slideShow(){
    //DOM - PEGANDO O ID E PASSSANDO CAMINHO DAS IMAGENS
    document.getElementById('imgBanner').src=imagens[index];
    //INCREMENTANDO
    index++;
//CONDICONAL if
    if(index == imagens.length){
        index=0;
    }
    //metodo setTimout para executar a função e chamar o tempo
      setTimeout('slideShow()',time);
    
}

//executando a função
slideShow();