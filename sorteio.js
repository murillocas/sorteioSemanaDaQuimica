const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const sala = urlParams.get('id');

var links = ["semanadaQuimica.json"] 
var nomelinks = ["Semana da Quimica","Credenciamento vespertino","Gincana","Credenciamento noturno","Conferência de abertura e momento cultural","Palestra de abertura","Oficina 1- Produção de alimentos a partir de plantas medicinais","Oficina 2: Ferramentas para análises de parâmetros físico-químicos de água de rio: Qualitativa e quantitativa","Oficina 3: ISSO MINHA AVÓ JÁ FAZIA! Uma perspectiva técnica da produção sustentável de sabão e sabonete líquido","Oficina 4: 5Rs da Sustentabilidade","Oficina 5: Análises químicas em microescala e suas vantagens para a Química Verde","Oficina 6- Química para um mundo sustentável: uma abordagem investigativa para o ensino de Química Verde","Oficina 7: Produção e utilização de extratos de produtos naturais para controle de fitopatógenos","Oficina 8- Cultura Maker no Ensino de Química: o uso do arduíno e impressão 3D","Cerimônia de encerramento","Palestra de encerramento"]
const nomeGanhador = document.getElementById('nome-ganhador');
const botaoSorteio = document.getElementById('sortear');
const emailGanhador = document.getElementById('email');
const nomecurso = document.getElementById('nome-curso');

var nome = "";
var email = "";
var repticao;

if(sala != null){
    nomecurso.innerHTML = nomelinks[sala];
    emailGanhador.innerHTML = "clique no botão abaixo para sortear!";
}

botaoSorteio.addEventListener('click',()=>{
    sortear(links[sala]);
})

function sortear(arquivo) {
    fetch(arquivo)
    .then(response => {
            return response.json();
    })
    .then(jsondata => {
            let aux = 0
            let test
            let terminar = -10
            for (aux; terminar < 0; aux++) {
                test = jsondata[aux]
                if (test == null) {
                    terminar = +10
                } else {
                    aux += 1
                }
            }
           // console.log('teste')
           // console.log(Math.floor(Math.random() * aux))
           // console.log(aux - 1)
            //let auxjson = console.log(jsondata[Math.floor(Math.random() * aux)].Nome)
            
        let indicGanhador = Math.floor(Math.random() * aux);
        console.log(indicGanhador);
          nome = JSON.stringify( jsondata[indicGanhador].Nome);

          email =JSON.stringify( jsondata[indicGanhador]["E-mail"]);

          nomeGanhador.innerHTML = nome;
          emailGanhador.innerHTML = email;
            
        
           
        })

       
}



fetch('semanadaQuimica.json')

    .then(response => {
            return response.json();
    })
    .then(jsondata => {
            let aux = 0
            let test
            let terminar = -10
            for (aux; terminar < 0; aux++) {
                test = jsondata[aux]
                if (test == null) {
                    terminar = +10
                } else {
                    aux += 1
                }
            }
           console.log(aux);
           // console.log(Math.floor(Math.random() * aux))
           // console.log(aux - 1)
            //let auxjson = console.log(jsondata[Math.floor(Math.random() * aux)].Nome)
        })