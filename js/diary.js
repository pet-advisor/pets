function save() {
    localStorage.sno = document.getElementById("sno").value
}

function load() {
    document.getElementById("sno").innerHTML = localStorage.sno
}