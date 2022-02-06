//Notas
const notas = [ 8,8,8,8];

const menuburger = document.querySelector('.menuburger');
const menu = document.querySelector('aside ul');
const InputsNotas = document.querySelectorAll('.notas input');
const mediaFinal = document.querySelector('.mediafinal p');
const aprovacao = document.querySelector('.aprovacao');
const btnPrimary = document.querySelector('.btn-primary');
const modalContainer = document.querySelector('.modal-container');

const close = document.querySelector('.close');
const btnFailure = document.querySelector('.btn-failure');
const btnSuccess = document.querySelector('.btn-success');


mediaFinal.textContent = mediaFinalCalculada().toFixed(2);

//Atualiza a nota do aluno
function atualizarNotas(){
    InputsNotas.forEach((input, index) => {
        if(notas[index] > 10 || notas[index] < 0 || isNaN(notas[index])){
            alert('Nota inválida, os valores tem que ser maior que 0 e menor que 10');

            notas[index] = " ";            
            mediaFinal.textContent = "Inválida";  
            input.value = "Nota Inválida";
    
        }else{  
            input.value = notas[index];
            mediaFinal.textContent = mediaFinalCalculada().toFixed(2);
        };        
    });
};
atualizarNotas();

//Calcula media final
function mediaFinalCalculada(){
    let soma = 0;
    notas.forEach(nota => {
        soma += nota;
    });
    return soma / notas.length;
} 

//Aprovação por media final
function aprovado(){
    if(mediaFinalCalculada() >= 7){
        aprovacao.textContent = 'Aprovado';
        aprovacao.classList.remove('pill-failure'); 
        aprovacao.classList.add('pill-success'); 
    
    }else{
        aprovacao.textContent = 'Reprovado'; 
        aprovacao.classList.remove('pill-success'); 
        aprovacao.classList.add('pill-failure'); 
    }   
}
aprovado();

//Menu Hambúrguer
menuburger.addEventListener('click', function(){
    menu.classList.toggle('show'); 
});

function notasfinais(){
    notas.forEach((nota, index) => {
        notas[index] = parseFloat(InputsNotas[index].value);     
    });
} 
 
btnPrimary.addEventListener('click', function(event){
    event.preventDefault ();
    modalContainer.classList.remove('hide');
});

close.addEventListener('click', function(){
    modalContainer.classList.add('hide');
});
btnFailure.addEventListener('click', function(){
    modalContainer.classList.add('hide');
});
modalContainer.addEventListener('click', function(event){
    if(event.target.classList.contains('modal-container')){
        modalContainer.classList.add('hide');
    }
});
btnSuccess.addEventListener('click', function(){
    modalContainer.classList.add('hide');
    notasfinais();
    atualizarNotas();
    aprovado();
});