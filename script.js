// FECHA REAL
//const fechaBoda = new Date("May 30, 2026 11:00:00").getTime();


// FECHA PRUEBA (10 segundos)
const fechaBodaObj = new Date();
fechaBodaObj.setSeconds(fechaBodaObj.getSeconds() + 10);
const fechaBoda = fechaBodaObj.getTime();

// ABRIR SOBRE
document.getElementById("sobre").addEventListener("click", function () {

    this.classList.add("abrir");

    setTimeout(function(){

        document.getElementById("landing").style.display = "none";
        document.getElementById("contenido").style.display = "block";

    }, 1600);

});

const contador = setInterval(function(){

    const ahora = new Date().getTime();
    const diferencia = fechaBoda - ahora;

    if(diferencia <= 0){

        clearInterval(contador);

        document.getElementById("contador").classList.add("explosion");

        setTimeout(function(){
            

            document.getElementById("contador").style.display = "none";

            const hoy = document.getElementById("hoy");
            hoy.style.display = "block";
            hoy.classList.add("mostrar");

        },800);

        return;
    }

    const dias = Math.floor(diferencia / (1000*60*60*24));
    const horas = Math.floor((diferencia % (1000*60*60*24)) / (1000*60*60));
    const minutos = Math.floor((diferencia % (1000*60*60)) / (1000*60));
    const segundos = Math.floor((diferencia % (1000*60)) / 1000);

    document.getElementById("mensaje").innerHTML = "Faltan " + dias + " dias";

    document.getElementById("dias").innerHTML = String(dias).padStart(2,"0");
    document.getElementById("horas").innerHTML = String(horas).padStart(2,"0");
    document.getElementById("minutos").innerHTML = String(minutos).padStart(2,"0");
    document.getElementById("segundos").innerHTML = String(segundos).padStart(2,"0");

},1000);