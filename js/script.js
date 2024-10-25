// Controlar el modal de la imagen
var modal = document.getElementById("myModal");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
var closeBtn = document.getElementsByClassName("close")[0];

// Botón que activa el modal y el audio
var button = document.getElementById("startButton");
button.onclick = function() {
    modal.style.display = "block";
    
    // Verifica que la ruta de la imagen sea correcta
    var imagePath = "img/casadelajuventud.jpg"; 
    if (imagePath) {
        modalImg.src = imagePath;
        captionText.innerHTML = "Pista del lugar: Detrás de un cuartel existe la Casa de la Juventud, donde la oscuridad reina.";
    } else {
        modalImg.src = "";
        captionText.innerHTML = "Imagen no disponible";
    }

    // Reproducir el audio al hacer clic en el botón
    var audio = document.getElementById("background-audio");

    // Este bloque intenta reproducir el audio y maneja los errores
    audio.play().then(() => {
        console.log("Audio reproduciéndose");
    }).catch(error => {
        console.error("Error al reproducir el audio:", error);
        // Si hay un error, puedes manejarlo aquí (por ejemplo, mostrar un mensaje o intentar otra acción)
    });
};

// Cerrar modal al hacer clic en la (x)
closeBtn.onclick = function() {
    modal.style.display = "none";
}

