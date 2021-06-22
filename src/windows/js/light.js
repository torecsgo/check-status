document.getElementById("light").onclick = async function (e) {
    e.preventDefault();
    let styles = document.getElementById("style");
    if(styles.href == "https://bootswatch.com/4/cyborg/bootstrap.min.css") {
        styles.href = "https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css";
    } else if (styles.href == "https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css") {
        styles.href = "https://bootswatch.com/4/cyborg/bootstrap.min.css";
    } else {
        styles.href = "https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css";
    }
    //integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6"
};