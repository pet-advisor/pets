function submit() {
    let petNames = [
        { names: "Doggo <br> Sweetu" },
        { names: "Cutie<br>Goosie<br>Luci<br>Leo" }
    ]
    let x = document.getElementById("dpdn").value
    document.getElementById("display").innerHTML = petNames[x].names
}

