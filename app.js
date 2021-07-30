window.onload = function(){
    crearInput();
    // crearSalto({i:2});
    let input = document.getElementById("myInput");
    let myStyle = {
        border: "1px solid #000",
        "border-radius": "5px",
        padding: "6px",
        color: "#444",
        outline: "none !importan",
        "font-family": "fantasy",
        "font-size": "2rem"
    }
    Object.assign(input.style, myStyle);
    
    input.addEventListener("keydown", function(e){ //Cuando cualquier tecla es acionada
        console.log("Un tecla fue acionada");
    })
    input.onkeydown = (e)=>{
        console.log("%cUn tecla fue acionada","color:blue;");
    }
    input.addEventListener("keypress", function(e){// Cuando undimos una tecla
        console.log("Tecla acionado letras signos numeros");
    })
    input.onkeypress = (e)=>{
        console.log("%cTecla acionado letras signos numeros","color:blue;");
    }
    input.addEventListener("keyup", function(e){// Cuando soltamos cualquier tecla
        console.log("Tecla soltada");
    })
    input.onkeyup = (e)=>{
        console.log("%cTecla soltada","color:blue;");
    }
}
let crearSalto = ({...arg})=>{
    let i = 0;
    let fragment = new DocumentFragment();
    ciclo:
    while(i < arg.i){
        let salto = document.createElement("BR");
        fragment.appendChild(salto)
        i++;
        continue ciclo;
    }
    document.body.appendChild(fragment);
}
let crearBoton = ()=>{
    let buton = document.createElement("BUTTON");
    let texto = document.createTextNode("Click");
    buton.id = "miBoton";
    buton.type = "button";
    buton.appendChild(texto);
    document.body.appendChild(buton);
}
let crearInput = ()=>{
    let input = document.createElement("INPUT");
    input.id = "myInput";
    input.type = "text";
    document.body.appendChild(input);
}
let crearDiv = ()=>{
    let div = document.createElement("DIV");
    div.id = "miDiv";
    div.style.width = "100%";
    div.style.height = "50px";
    div.style.background = "#00000026";
    document.body.appendChild(div);
}