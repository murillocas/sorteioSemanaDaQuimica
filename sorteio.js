const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const sala = urlParams.get('id');

var links = ["semanadaQuimica.json"
    , "CredenciamentoVespertino.json"
    , "Gincana.json"
    , "CredenciamentoNoturno.json"
    , "ConferenciaAbertura.json"
    , "PalestraAbertura.json"
    , "Oficina1.json"
    , "Oficina2.json"
    , "Oficina3.json"
    , "Oficina4.json"
    , "Oficina5.json"
    , "Oficina6.json"
    , "Oficina7.json"
    , "Oficina8.json"
    , "CerimoniaEncerramento.json"
    , "PalestraEncerramento.json"]

var nomelinks = ["Semana da Quimica",
    "Credenciamento vespertino",
    "Gincana",
    "Credenciamento noturno",
    "Conferência de abertura e momento cultural",
    "Palestra de abertura",
    "Oficina 1- Produção de alimentos a partir de plantas medicinais",
    "Oficina 2: Ferramentas para análises de parâmetros físico-químicos de água de rio: Qualitativa e quantitativa",
    "Oficina 3: ISSO MINHA AVÓ JÁ FAZIA! Uma perspectiva técnica da produção sustentável de sabão e sabonete líquido",
    "Oficina 4: 5Rs da Sustentabilidade"
    , "Oficina 5: Análises químicas em microescala e suas vantagens para a Química Verde"
    , "Oficina 6- Química para um mundo sustentável: uma abordagem investigativa para o ensino de Química Verde"
    , "Oficina 7: Produção e utilização de extratos de produtos naturais para controle de fitopatógenos"
    , "Oficina 8- Cultura Maker no Ensino de Química: o uso do arduíno e impressão 3D"
    , "Cerimônia de encerramento"
    , "Palestra de encerramento"]

const nomeGanhador = document.getElementById('nome-ganhador');
const botaoSorteio = document.getElementById('sortear');
const emailGanhador = document.getElementById('email');
const nomecurso = document.getElementById('nome-curso');

var nome = "";
var email = "";
var qtdelementos;
var repticao;
var trocar = 0;

fetch(links[sala])
    .then(response => {
        return response.json();
    })
    .then(jsondata => {
        let aux = 0
        let test;
        let terminar = -10;
        for (aux; terminar < 0; aux++) {
            test = jsondata[aux]
            if (test == null) {
                break;
                terminar = +10
            } else {
                aux += 1
            }
        }
        //console.log("aux"+aux);
        qtdelementos = aux-1;

       // console.log("qtd "+qtdelementos)
        listar();
        // console.log(Math.floor(Math.random() * aux))
        // console.log(aux - 1)
        //let auxjson = console.log(jsondata[Math.floor(Math.random() * aux)].Nome)
    })


function listar() {
    repticao = [qtdelementos];
    //console.log("qtd lista antes" + repticao.length);
    for (let x = 0; x <= qtdelementos-1; x++) {
        repticao[x] = true;
    }
   /* console.log("tamanho da lista aux "+repticao.length);
    console.log("testestestes");*/

}



if (sala != null) {
    nomecurso.innerHTML = nomelinks[sala];
    emailGanhador.innerHTML = "clique no botão abaixo para sortear!";
}

botaoSorteio.addEventListener('click', () => {
    sortear(links[sala]);
});

function sortear(arquivo) {
    fetch(arquivo)
        .then(response => {
            return response.json();
        })
        .then(jsondata => {
            
            // console.log('teste')
            // console.log(Math.floor(Math.random() * aux))
            // console.log(aux - 1)
            //let auxjson = console.log(jsondata[Math.floor(Math.random() * aux)].Nome)

            let indicGanhador = Math.floor(Math.random() * (qtdelementos));
            //console.log("indice ganhador "+indicGanhador);
            while (indicGanhador <= qtdelementos) {
                if (repticao[indicGanhador]) {
                    console.log("sorteado :" + indicGanhador);
                    repticao[indicGanhador] = false;
                    nome = JSON.stringify(jsondata[indicGanhador].Nome);
                    email = JSON.stringify(jsondata[indicGanhador]["E-mail"]);
                    nomeGanhador.innerHTML = nome;
                    emailGanhador.innerHTML = email;
                    trocar += 1;
                    //console.log("trocar" + trocar)
                    break;
                }
                if(trocar >= qtdelementos){
                    verificarCheio();
                }
                
                indicGanhador += 1;
                //console.log("repetiu");
                if (indicGanhador > qtdelementos) {
                    indicGanhador = 0;
                } 

            }
        })

        function verificarCheio(){
            let x=0;
            trocar =0;
            console.log("trocar----------------");
            
                for(x=0;x<qtdelementos;x++){
                    repticao[x] = true;
                }
            

        }

}



