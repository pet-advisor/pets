function submit() {
    let petNames = [
        // this is dogs
        {
            male: "Doggo (Personal Favorite) <br> Sweetu <br> Ace <BR> Albert <BR> Baxter <BR> Charlie <BR> Duke <BR> Elvis<BR> Finn<BR> Harley <BR> Moose <BR> Oscar <BR> Petey <BR> Prince <BR> Sammy <BR> Thor <BR> Ziggy", female: "Angel <BR> Biscuit <BR> Buttercup <BR> Cookie <BR> Cupcake <BR> Fluffy <BR> Happy <BR> Marigold <BR> Marshmallow <BR> Peaches <BR> Precious <BR> Sugar <BR> Sunshine <BR> Sweetie <BR> Waffles <BR> Astrid <BR> Britta <BR> Dumpling <BR> Elsa <BR> Gretel <BR> Heidi <BR> Lotti <BR> Milla <BR> Nia <BR> Sascha <BR> Schnapps <BR> Schnitzel <BR> Strudel <BR> Zelda"
        },
        // this is cats
        {
            male: "Oliver <br> Leo <br> Milo <br> Charlie <br> Max <br> Jack <br> Simba <br> Loki <br> Oscar <br> Jasper", female: "Taz <br> Betsy <br> Beatrice <br> Blitzen <br> Betty <br> Crystal <br> Camile <br> Delia <br> Sabrina <br> Shasta <br> Snow White <br> Sugar <br> Abigail <br> Alice"
        },
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

