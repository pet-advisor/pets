function submit() {
    let petNames = [
        // this is dogs
        { male: "Doggo (Personal Favorite) <br> Sweetu", female: "Doggi<br>Sweeti" },
        // this is cats
        { male: "Cutie<br>Goosie<br>Luci<br>Leo", female: "Lioness<br>Gucy<br>Luci<br>Zoyi" },
        // add parrot next
        // after that add fishes
        // after that add Hamster
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

