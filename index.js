function add() {
    var br = document.createElement("br");
    var y = document.createElement("INPUT");
    var x = document.createElement("INPUT");
    y.setAttribute("type", "radio");
    y.addEventListener("click", function () {
        y.style.display = "none";
        x.style.display = "none";
        br.style.display = "none";
    });
    x.setAttribute("type", "text");
    document.body.appendChild(br);
    document.body.appendChild(y);
    document.body.appendChild(x);
}