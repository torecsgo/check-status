const pingButton = document.getElementById("pingSubmit");
const deletePings = document.getElementById("deletePings");

pingButton.onclick = async (e) => {
    e.preventDefault();

    const ip = document.getElementById("pingIP").value;
    await axios.get(`https://check-host.net/check-ping?host=${ip}&max_nodes=1`, { headers: { 'Content-Type': 'application/json', "Accept": "application/json" } }).then(async data => {
        console.log(data.data)
        let request_id = data.data.request_id;
        let permanent_link = data.data.permanent_link;
        let node = Object.keys(data.data.nodes).toString();
        let server = node.split(".")[0]
        let svIp = data.data.nodes[node][3]
        console.log(svIp)
        //https://check-host.net/check-result/806df9
        //https://check-host.net/check-result/${request_id}
        setTimeout(() => {
            axios.get(`https://check-host.net/check-result/${request_id}`, { headers: { "Accept": "application/json" } }).then(async result => {
                //alert(result.data)
                let response = result.data[node][0];
                let res = [response[0], response[1], response[2], response[3]]
                createPing(ip, res, server, svIp);
            })
        }, 5000)
    })
}

function createPing(ip, res, server, serverIP) {
    const divCreado = document.getElementById("search-ping");
    const busquedas = document.createElement("div");
    busquedas.id = "newPing";
    busquedas.classList.add("col");
    divCreado.appendChild(busquedas);

    return busquedas.innerHTML = `
   <div class="card text-center">
   <div class="card-header">
       IP: ${ip}
       <br/>
       Sever: ${server}, IP: ${serverIP}
   </div>
   <div class="card-body">
       <p class="card-text">First Response Results: Status: ${res[0][0]}, Time: ${res[0][1]}ms</p>
       <p class="card-text">Second Response Results: Status: ${res[1][0]}, Time: ${res[1][1]}ms</p>
       <p class="card-text">Third Response Results: Status: ${res[2][0]}, Time: ${res[2][1]}ms</p>
       <p class="card-text">Fourth Response Results: Status: ${res[3][0]}, Time: ${res[3][1]}ms</p>
   </div>
   <div class="card-footer text-muted">
       ${new Date}
   </div>
</div>`
}