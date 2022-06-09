const nomeGanhador = document.getElementById('nome-ganhador');
const botaoSorteio = document.getElementById('sortear');
const emailGanhador = document.getElementById('email');

var nome = "";
var email = "";
var repticao;

botaoSorteio.addEventListener('click',()=>{

    sortear('semanadaQuimica.json');
    console.log("testestes")

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