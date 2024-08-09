let menuVisible = false;
//Funcion que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList = "";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList = "responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculta el menu una vez que seleccionamos una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distacia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distacia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript")
        habilidades[1].classList.add("htmlcss")
        habilidades[2].classList.add("cshar")
        habilidades[3].classList.add("bootstrap")
        habilidades[4].classList.add("sqlmysql")
        habilidades[5].classList.add("github")
        habilidades[6].classList.add("wordpress")
        habilidades[7].classList.add("comunicacion")
        habilidades[8].classList.add("traequipo")
        habilidades[9].classList.add("gestionriesgo")
        habilidades[10].classList.add("disciplina")
    }
}
//detecto el scrolling para aplicar la animacion de la barra de habilidades 
window.onscroll = function(){
    efectoHabilidades();
}