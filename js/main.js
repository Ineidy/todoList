document.addEventListener ('DOMContentLoaded', () => {
    const datosContenedor = document.querySelector('.opciones');

    async function fetchData() {
        const res = await fetch('https://6674179975872d0e0a950e53.mockapi.io/todoList');
        data = await res.json();
        return data;
    }
    function displayCapsula(capsula) {
        datosContenedor.innerHTML = '';
        capsula.forEach(cap => {
            const capDiv = document.createElement('div');

            if(cap.status === "ready") {
            capDiv.classList.add('capsulanegativa');
                capDiv.innerHTML =  `
                <div class="capsulanegativa">
            <div class="infotextnegativo">
                <p>${cap.task}</p>
            </div>
            <div class="botonesnegativo">
                <div class="terminadonegativo">
                    <img src="storage/img/pngwing.com (2).png" >
                </div>
                <div class="eliminadonegativo">
                    <img src="storage/img/pngwing.com (4).png" >
                </div>
            </div>
        </div>
                `
            }
            if (cap.status === "On hold") {
            capDiv.classList.add('capsula');
                capDiv.innerHTML = `
                <div class="capsula">
                <div class="infotext">
                    <p>${cap.task}</p>
                </div>
                <div class="botones">
                    <div class="terminado">
                        <img src="storage/img/pngwing.com (2).png" >
                    </div>
                    <div class="eliminado">
                        <img src="storage/img/pngwing.com (4).png" >
                    </div>
                </div>
            </div>
            
    
                `
            }
            datosContenedor.appendChild(capDiv)
        });
    }
    fetchData().then(data => displayCapsula(data));
})