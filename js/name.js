function submit() {
    let petNames = [
        { male: "Doggo <br> Sweetu", female: "Doggi<br>Sweeti" },
        { male: "Cutie<br>Goosie<br>Luci<br>Leo", female: "Lioness<br>Gucy<br>Luci<br>Zoyi" },
    ]
    let x = document.getElementById("dpdn").value
    let y = document.getElementById("gender").value
    let z = "male"
    if (y == z) {
        document.getElementById("display").innerHTML = petNames[x].male
    }
    else {
        document.getElementById("display").innerHTML = petNames[x].female
    }
}

