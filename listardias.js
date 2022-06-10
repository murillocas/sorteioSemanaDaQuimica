Selectiondia13 = document.getElementById('sdia13');
Selectiondia14 = document.getElementById('sdia14');
Selectiondia15 = document.getElementById('sdia15');


const dia13 =  document.getElementById("dia13");
const dia14 =  document.getElementById("dia14");
const dia15 =  document.getElementById("dia15");




Selectiondia13.addEventListener("click", () => {
   
console.log("click 13");
    if (dia13.classList.contains("hidden")) {
        dia13.classList.remove("hidden");
    } else {
        
    }

    if (dia14.classList.contains("hidden")) {
        
    }else{
        dia14.classList.add("hidden");
    }
    if (dia15.classList.contains("hidden")) {
        
    }else{
        dia15.classList.add("hidden");
    }
});

Selectiondia14.addEventListener("click", () => {
    console.log("click 14");

    if (dia14.classList.contains("hidden")) {

        dia14.classList.remove("hidden");
    } else {
       
    }

    if (dia13.classList.contains("hidden")) {
       
    }else{
         dia13.classList.add("hidden");
    }
    if (dia15.classList.contains("hidden")) {
        
    }else{
        dia15.classList.add("hidden");
    }
});

Selectiondia15.addEventListener("click", () => {
    console.log("click 15");

    if (dia15.classList.contains("hidden")) {
        dia15.classList.remove("hidden");
    } else {
       
    }
    if (dia13.classList.contains("hidden")) {
       
    }else{
         dia13.classList.add("hidden");
    }
    if (dia14.classList.contains("hidden")) {
        
    }else{
        dia14.classList.add("hidden");
    }
});
