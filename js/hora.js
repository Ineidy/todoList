function displayTime() {
    const date = new Date();
    const horas = String(date.getHours()).padStart(2, '0');
    const minutos = String(date.getMinutes()).padStart(2, '0');
    const segundos = String(date.getSeconds()).padStart(2, '0');
    document.querySelector("#horaactual").innerHTML = `${horas}:${minutos}:${segundos}`;
}
setInterval(displayTime, 1000);