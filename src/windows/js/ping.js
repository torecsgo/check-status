// OUTDATED

const pingButton = document.getElementById("pingSubmit");
const deletePings = document.getElementById("deletePings");

pingButton.onclick = async (e) => {
    e.preventDefault();

    const ip = document.getElementById("pingIP").value;
    await axios.get(`https://steakovercooked.com/api/ping/?host=${ip}`).then(async data => {
        let resultadosPing = [];
        const resultadosPing1 = data.data.trim().split(" ").slice(7, 13);
        const resultadosPing2 = data.data.trim().split(" ").slice(14, 20);
        const resultadosPing3 = data.data.trim().split(" ").slice(21, 27);

        const fraseResultadosPing1 = `64 ${resultadosPing1[0]} ${resultadosPing1[1]} ${resultadosPing1[2]} ${resultadosPing1[3]} ${resultadosPing1[4]} ${resultadosPing1[5]}ms`;
        const fraseResultadosPing2 = `64 ${resultadosPing2[0]} ${resultadosPing2[1]} ${resultadosPing2[2]} ${resultadosPing2[3]} ${resultadosPing2[4]} ${resultadosPing2[5]}ms`;
        const fraseResultadosPing3 = `64 ${resultadosPing3[0]} ${resultadosPing3[1]} ${resultadosPing3[2]} ${resultadosPing3[3]} ${resultadosPing3[4]} ${resultadosPing3[5]}ms`;

        resultadosPing.push(fraseResultadosPing1, fraseResultadosPing2, fraseResultadosPing3);
        respuestaPing(ip, resultadosPing);
    })
}

function respuestaPing(ipAddress, res) {
    if (res[0].split(" ").slice(1, 2).includes(ipAddress)) {
        alert("IP does not exist or has no response.");
    } else {
        const divCreado = document.getElementById("search-ping");
        const busquedas = document.createElement("div");
        busquedas.id = "newPing";
        busquedas.classList.add("col");
        divCreado.appendChild(busquedas);

        return busquedas.innerHTML = `
       <div class="card text-center">
       <div class="card-header">
           IP: ${ipAddress}
       </div>
       <div class="card-body">
           <p class="card-text">First Response Results: ${res[0]}</p>
           <p class="card-text">Second Response Results: ${res[1]}</p>
           <p class="card-text">Third Response Results: ${res[2]}</p>
       </div>
       <div class="card-footer text-muted">
           ${new Date}
       </div>
   </div>`
    };
};
