const data = [
    {
      "_id": "61fc67e44ac91ace7d6fd5bb",
      "nome": "Lola Luna",
      "matricula": 809618395,
      "frequencia": 58,
      "notas": [
        21,
        55,
        48,
        67
      ],
      "picture": "img/aluno-00.png",
      "isAccredited": false
    },
    {
      "_id": "61fc67e42fe2014d9a815c6b",
      "nome": "Eileen Sawyer",
      "matricula": 676215496,
      "frequencia": 75,
      "notas": [
        63,
        53,
        26,
        86
      ],
      "picture": "img/aluno-01.png",
      "isAccredited": true
    },
    {
      "_id": "61fc67e41535f978ebbbd0ba",
      "nome": "Adela Osborne",
      "matricula": 478964916,
      "frequencia": 34,
      "notas": [
        11,
        96,
        4,
        48
      ],
      "picture": "img/aluno-02.png",
      "isAccredited": true
    },
    {
      "_id": "61fc67e438359dc9136f9b7c",
      "nome": "Leigh Wong",
      "matricula": 525853301,
      "frequencia": 24,
      "notas": [
        76,
        88,
        63,
        95
      ],
      "picture": "img/aluno-03.png",
      "isAccredited": true
    },
    {
      "_id": "61fc67e4c129eb2f6605449d",
      "nome": "Isabelle Morse",
      "matricula": 780949583,
      "frequencia": 100,
      "notas": [
        17,
        14,
        56,
        21
      ],
      "picture": "img/aluno-04.png",
      "isAccredited": false
    },
    {
      "_id": "61fc67e473097d4ee0bc867c",
      "nome": "Laurie Cross",
      "matricula": 696135367,
      "frequencia": 67,
      "notas": [
        81,
        57,
        7,
        85
      ],
      "picture": "img/aluno-05.png",
      "isAccredited": true
    },
    {
      "_id": "61fc67e44ec626cc953f007f",
      "nome": "Harris Franco",
      "matricula": 721833737,
      "frequencia": 26,
      "notas": [
        68,
        77,
        71,
        32
      ],
      "picture": "img/aluno-06.png",
      "isAccredited": false
    },
    {
      "_id": "61fc67e441fb2413af3929b8",
      "nome": "Hatfield Molina",
      "matricula": 924313188,
      "frequencia": 11,
      "notas": [
        26,
        16,
        92,
        76
      ],
      "picture": "img/aluno-07.png",
      "isAccredited": false
    },
    {
      "_id": "61fc67e44c967cf309deace2",
      "nome": "Fulton Sweet",
      "matricula": 829995829,
      "frequencia": 81,
      "notas": [
        78,
        54,
        38,
        0
      ],
      "picture": "img/aluno-08.png",
      "isAccredited": true
    },
    {
      "_id": "61fc67e4776b671b4ee73039",
      "nome": "Rojas Mitchell",
      "matricula": 745068323,
      "frequencia": 77,
      "notas": [
        59,
        48,
        41,
        0
      ],
      "picture": "img/aluno-09.png",
      "isAccredited": true
    },
    {
      "_id": "61fc67e43b27a4801db1ae07",
      "nome": "Gaines Munoz",
      "matricula": 970322482,
      "frequencia": 78,
      "notas": [
        3,
        44,
        95,
        45
      ],
      "picture": "img/aluno-10.png",
      "isAccredited": true
    }
];

const cards = document.querySelector('#cards');  

const menuburger = document.querySelector('.menuburger');
const menu = document.querySelector('aside ul');
 

menuburger.addEventListener('click', function(){
    menu.classList.toggle('show'); 
});

data.forEach(data => {
    const card = document.createElement('div');
    card.classList.add('card');

    let imgAluno = createImage(data);
    let nomeAluno = createName(data);
    let matricula = createMatricular(data);
    let frequencia = createFrequencia(data);
    let notas = createNotas(data); 
    let accredited = createAccredited(data);
    let btnAlterarNota = createButton(data);

    card.appendChild(imgAluno); 
    card.appendChild(nomeAluno); 
    card.appendChild(matricula); 
    card.appendChild(frequencia);
    card.appendChild(notas);
    card.appendChild(accredited);   
    card.appendChild(btnAlterarNota);  

    cards.appendChild(card);
});

function createImage(data){    
    const imgAluno = document.createElement('img');
    imgAluno.setAttribute('src', `${data.picture}`);
    imgAluno.setAttribute('alt', `${data.matricula}`);
    return imgAluno;
}

function createName(data){
    const nomeAluno = document.createElement('a');
    nomeAluno.setAttribute('href', 'aluno.html');
    nomeAluno.classList.add('t-secondary');
    nomeAluno.innerHTML = `${data.nome}`;
    return nomeAluno;
}

function createMatricular(data){
    const matricula = document.createElement('a');
    matricula.setAttribute('href', 'aluno.html');
    matricula.classList.add('t-secondary');
    matricula.innerHTML = `${data.matricula}`;
    return matricula;
};

function createFrequencia(data){
    const frequencia = document.createElement('div');
    frequencia.classList.add('frequencia');    
    const frequenciaPorcent = document.createElement('p');
    frequenciaPorcent.classList.add('t-greymed');
    frequenciaPorcent.innerHTML = `${data.frequencia}%`;

    const frequenciaBar = document.createElement('div');
    frequenciaBar.classList.add('frequencia-bar'); 

    const frequenciaPorcentBar = document.createElement('div');        
    frequenciaPorcentBar.classList.add('frequencia-porcent');

    const calculoFrencia = `${data.frequencia}`;
    frequenciaPorcentBar.style.width = `${calculoFrencia}%`;
    
    frequencia.appendChild(frequenciaPorcent);
    frequencia.appendChild(frequenciaBar);
    frequenciaBar.appendChild(frequenciaPorcentBar);
    return frequencia;
};

function createNotas(data){
    const notas = document.createElement('p');
    notas.classList.add('t-greymed');
    notas.innerHTML = `PI - ${data.notas[0]}, PII - ${data.notas[1]}, PIII - ${data.notas[2]}, PVI - ${data.notas[3]}`;    
    return notas;
}; 

function createAccredited(data){
    const accredited = document.createElement('span');
    const isAccredited = data.isAccredited;    

    if(isAccredited){
        accredited.classList.add('pill-success');
        accredited.innerHTML = 'Aprovado';
    } else {
        accredited.classList.add('pill-danger');
        accredited.innerHTML = 'Reprovado';
    }    
    return accredited;
};

function  createButton(data){    
    const btnAlterarNota = document.createElement('a');
    btnAlterarNota.setAttribute('href', 'aluno.html');
    btnAlterarNota.classList.add('btn');
    btnAlterarNota.innerHTML = 'Alterar Nota';
    return btnAlterarNota;
}