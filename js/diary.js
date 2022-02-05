
function save() {
    localStorage.sno1 = document.getElementById("sno1").value
    localStorage.name1 = document.getElementById("name1").value
    localStorage.rdate1 = document.getElementById("rdate1").value
    localStorage.ndate1 = document.getElementById("ndate1").value
    localStorage.sno2 = document.getElementById("sno2").value
    localStorage.name2 = document.getElementById("name2").value
    localStorage.rdate2 = document.getElementById("rdate2").value
    localStorage.ndate2 = document.getElementById("ndate2").value
    localStorage.sno3 = document.getElementById("sno3").value
    localStorage.name3 = document.getElementById("name3").value
    localStorage.rdate3 = document.getElementById("rdate3").value
    localStorage.ndate3 = document.getElementById("ndate3").value
    localStorage.sno4 = document.getElementById("sno4").value
    localStorage.name4 = document.getElementById("name4").value
    localStorage.rdate4 = document.getElementById("rdate4").value
    localStorage.ndate4 = document.getElementById("ndate4").value
    localStorage.sno5 = document.getElementById("sno5").value
    localStorage.name5 = document.getElementById("name5").value
    localStorage.rdate5 = document.getElementById("rdate5").value
    localStorage.ndate5 = document.getElementById("ndate5").value
}

function load() {
    if (localStorage.sno1 == "undefined") {
        localStorage.sno1 = ""
    }
    if (localStorage.sno2 == "undefined") {
        localStorage.sno2 = ""
    }
    if (localStorage.sno3 == "undefined") {
        localStorage.sno3 = ""
    }
    if (localStorage.sno4 == "undefined") {
        localStorage.sno4 = ""
    }
    if (localStorage.sno5 == "undefined") {
        localStorage.sno5 = ""
    }
    if (localStorage.name1 == "undefined") {
        localStorage.name1 = ""
    }
    if (localStorage.name2 == "undefined") {
        localStorage.name2 = ""
    }
    if (localStorage.name3 == "undefined") {
        localStorage.name3 = ""
    }
    if (localStorage.name4 == "undefined") {
        localStorage.name4 = ""
    }
    if (localStorage.name5 == "undefined") {
        localStorage.name5 = ""
    }
    if (localStorage.rdate1 == "undefined") {
        localStorage.rdate1 = ""
    }
    if (localStorage.rdate2 == "undefined") {
        localStorage.rdate2 = ""
    }
    if (localStorage.rdate3 == "undefined") {
        localStorage.rdate3 = ""
    }
    if (localStorage.rdate4 == "undefined") {
        localStorage.rdate4 = ""
    }
    if (localStorage.rdate5 == "undefined") {
        localStorage.rdate5 = ""
    }
    if (localStorage.ndate1 == "undefined") {
        localStorage.ndate1 = ""
    }
    if (localStorage.ndate2 == "undefined") {
        localStorage.ndate2 = ""
    }
    if (localStorage.ndate3 == "undefined") {
        localStorage.ndate3 = ""
    }
    if (localStorage.ndate4 == "undefined") {
        localStorage.ndate4 = ""
    }
    if (localStorage.ndate5 == "undefined") {
        localStorage.ndate5 = ""
    }
    document.getElementById("sno1").innerHTML = localStorage.sno1
    document.getElementById("name1").innerHTML = localStorage.name1
    document.getElementById("rdate1").innerHTML = localStorage.rdate1
    document.getElementById("ndate1").innerHTML = localStorage.ndate1
    document.getElementById("sno2").innerHTML = localStorage.sno2
    document.getElementById("name2").innerHTML = localStorage.name2
    document.getElementById("rdate2").innerHTML = localStorage.rdate2
    document.getElementById("ndate2").innerHTML = localStorage.ndate2
    document.getElementById("sno3").innerHTML = localStorage.sno3
    document.getElementById("name3").innerHTML = localStorage.name3
    document.getElementById("rdate3").innerHTML = localStorage.rdate3
    document.getElementById("ndate3").innerHTML = localStorage.ndate3
    document.getElementById("sno4").innerHTML = localStorage.sno4
    document.getElementById("name4").innerHTML = localStorage.name4
    document.getElementById("rdate4").innerHTML = localStorage.rdate4
    document.getElementById("ndate4").innerHTML = localStorage.ndate4
    document.getElementById("sno5").innerHTML = localStorage.sno5
    document.getElementById("name5").innerHTML = localStorage.name5
    document.getElementById("rdate5").innerHTML = localStorage.rdate5
    document.getElementById("ndate5").innerHTML = localStorage.ndate5
}