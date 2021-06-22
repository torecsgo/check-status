const botonAdd = document.getElementById("ipSubmit");
const botonDelete = document.getElementById("delete");
botonAdd.onclick = async function (e) {
    e.preventDefault();
    let ip = document.getElementById("ipInput").value;
    console.log(ip);
    let info = [];
    const apiKey = 'fd4f29de4e59449295e7e2e7831896fc';
    const IPInfo = `https://api.ipgeolocation.io/ipgeo?ip=${ip}&include=security&apiKey=${apiKey}`;
    const security = `http://ip-api.com/json/${ip}?fields=proxy`;

    await axios.get(IPInfo).then(async data => {
        resIp = data.data;
        info.push({
            ip: resIp.ip,
            isp: resIp.organization,
            continent: resIp.continent_name,
            country: resIp.country_name,
            comunidad: resIp.state_prov,
            ciudad: resIp.city,
            localizacion: [resIp.latitude, resIp.longitude]
        });
    });
    await axios.get(security).then(async data => {
        proxy = data.data.proxy;
        info.push({
            proxy: proxy
        });
    });
    console.log(info);
    logData(info);
    document.getElementById("ipInput").innerHTML = "";
}
botonDelete.onclick = async function (e) {
    e.preventDefault();
    document.getElementById("search").innerHTML = "";
}
function logData(arrayInfo) {

    const ipInfo = arrayInfo[0];
    const IP = ipInfo.ip;
    const isp = ipInfo.isp;

    const continente = ipInfo.continent;
    const pais = ipInfo.country;
    const comunidad = ipInfo.comunidad;
    const ciudad = ipInfo.ciudad;

    const latitud = ipInfo.localizacion[0];
    const longitud = ipInfo.localizacion[1];

    const proxyInfo = arrayInfo[1].proxy;

    const divCreado = document.getElementById("search");
    const busquedas = document.createElement("div");
    busquedas.id = "newIP";
    busquedas.classList.add("col");
    divCreado.appendChild(busquedas);
    return busquedas.innerHTML = `
    <div class="card text-center" style="width: 18rem;">
    <div class="card-body">
        <h5 class="card-title">IP: ${IP}</h5>
        <p class="card-text">PROXY: ${proxyInfo}</p>
        <p class="card-text">ISP: ${isp}</p>
    </div>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">Continent: ${continente}</li>
        <li class="list-group-item">Country: ${pais}</li>
        <li class="list-group-item">State: ${comunidad}</li>
        <li class="list-group-item">City: ${ciudad}</li>
    </ul>
    <ul class="card-body list-group list-group-flush">
        <li class="list-group-item">Latitude: ${latitud}</a>
        <li class="list-group-item">Longitude: ${longitud}</a>
    </ul>

    <div class="card-footer text-muted">
        ${new Date}
    </div>
</div>
    `;
};