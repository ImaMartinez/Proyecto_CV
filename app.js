let menuVisible = false;

function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList = "";
        menuVisible = false
    }else{
        document.getElementById("nav").classList = "responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    document.getElementById("nav").classList = "";
    menuVisible = false
}

function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("python");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("javascript");
        habilidades[3].classList.add("wordpower");
        habilidades[4].classList.add("excel");
        habilidades[5].classList.add("reparacion");
        habilidades[6].classList.add("comunicacion");
        habilidades[7].classList.add("trabajo");
        habilidades[8].classList.add("creatividad");
        habilidades[9].classList.add("dedicacion");
        habilidades[10].classList.add("companiero");
        habilidades[11].classList.add("pensamiento");
    }
}


window.onscroll = function(){
    efectoHabilidades();
}

botonCV = document.querySelector("#botonCV");

botonCV.addEventListener("click", function() {
    window.open("https://drive.google.com/file/d/1qspC9G6zA-b2GLrhLqqMuIq84L8-Jt6N/view?usp=share_link", '_blank');
});