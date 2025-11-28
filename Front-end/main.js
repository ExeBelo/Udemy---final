function banner() {
  const banner = document.getElementById("banner");

  banner.innerHTML = `
    <div class="flex justify-between items-center pt-3 pl-2 pr-5 text-san-francisco text-[20px] manolin">
      <div class="flex justify-center items-center flex-col">
        <div class="flex m-0">
          <div class="flex">
            <p class="font-bold justify-center items-center mr-2">
              Solo por 30 minutos
            </p>
            <p>
              Consigue un 15 % de descuento en tu primer año de una suscripción
              anual al Plan Personal para aprender habilidades innovadoras que
              te ayuden a avanzar en tu carrera profesional.
            </p>
          </div>
        </div>
        <div>
          <div id="timer" class="flex items-center justify-center">
            <p class="font-bold mr-2 flex items-center justify-center" x>
              Finaliza en
            </p>
            <div
              id="countdown"
              class="text-[30px] flex items-center justify-center"
            ></div>
          </div>
        </div>
      </div>
      <div class="flex justify-center items-center cursor-pointer" id="close">
        <img class="w-[30px]" src="./img/cerrar-removebg-preview.png" alt="x" />
      </div>
    </div>`;
  const close = document.getElementById("close");
  close.addEventListener("click", (e) => {
    banner.innerHTML = ``;
  });
}

banner();

const totalTime = 30 * 60 * 1000; // 30 minutos * 60 segundos/minuto * 1000 milisegundos/segundo
let startTime = new Date().getTime(); // Obtiene el tiempo actual en milisegundos
let endTime = startTime + totalTime;

// 2. Función para actualizar el temporizador
function updateCountdown() {
  const now = new Date().getTime();
  const timeDifference = endTime - now;

  // Calcula días, horas, minutos y segundos
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  // Formatea el tiempo a 2 dígitos
  const formattedMinutes = String(minutes).padStart(2, "0");
  const formattedSeconds = String(seconds).padStart(2, "0");

  // Muestra el tiempo en el elemento HTML
  document.getElementById(
    "countdown"
  ).innerHTML = `${formattedMinutes}:${formattedSeconds}`;

  // 3. Detén el temporizador cuando llegue a cero
  if (timeDifference < 0) {
    clearInterval(countdownInterval); // Detiene el intervalo
    document.getElementById("countdown").innerHTML = "¡Tiempo finalizado!";
  }
}

const countdownInterval = setInterval(updateCountdown, 1000);
updateCountdown();
