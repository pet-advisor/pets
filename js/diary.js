
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
    document.getElementById("verified").innerHTML = "Data Submitted Sucessfully"
}

function load() {
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
    let a = document.getElementById("sno1").value
    if (a == "undefined") {
        document.getElementById("sno1").innerHTML = ""
    }
    let b = document.getElementById("sno2").value
    if (b == "undefined") {
        document.getElementById("sno2").innerHTML = ""
    }
    let c = document.getElementById("sno3").value
    if (c == "undefined") {
        document.getElementById("sno3").innerHTML = ""
    }
    let d = document.getElementById("sno4").value
    if (d == "undefined") {
        document.getElementById("sno4").innerHTML = ""
    }
    let e = document.getElementById("sno5").value
    if (e == "undefined") {
        document.getElementById("sno5").innerHTML = ""
    }
    let f = document.getElementById("name1").value
    if (f == "undefined") {
        document.getElementById("name1").innerHTML = ""
    }
    let g = document.getElementById("name2").value
    if (g == "undefined") {
        document.getElementById("name2").innerHTML = ""
    }
    let h = document.getElementById("name3").value
    if (h == "undefined") {
        document.getElementById("name3").innerHTML = ""
    }
    let i = document.getElementById("name4").value
    if (i == "undefined") {
        document.getElementById("name4").innerHTML = ""
    }
    let j = document.getElementById("name5").value
    if (j == "undefined") {
        document.getElementById("name5").innerHTML = ""
    }
    let k = document.getElementById("rdate1").value
    if (k == "undefined") {
        document.getElementById("rdate1").innerHTML = ""
    }
    let l = document.getElementById("rdate2").value
    if (l == "undefined") {
        document.getElementById("rdate2").innerHTML = ""
    }
    let m = document.getElementById("rdate3").value
    if (m == "undefined") {
        document.getElementById("rdate3").innerHTML = ""
    }
    let n = document.getElementById("rdate4").value
    if (n == "undefined") {
        document.getElementById("rdate4").innerHTML = ""
    }
    let o = document.getElementById("rdate5").value
    if (o == "undefined") {
        document.getElementById("rdate5").innerHTML = ""
    }
    let p = document.getElementById("ndate1").value
    if (p == "undefined") {
        document.getElementById("ndate1").innerHTML = ""
    }
    let q = document.getElementById("ndate2").value
    if (q == "undefined") {
        document.getElementById("ndate2").innerHTML = ""
    }
    let r = document.getElementById("ndate3").value
    if (r == "undefined") {
        document.getElementById("ndate3").innerHTML = ""
    }
    let s = document.getElementById("ndate4").value
    if (s == "undefined") {
        document.getElementById("ndate4").innerHTML = ""
    }
    let t = document.getElementById("ndate5").value
    if (t == "undefined") {
        document.getElementById("ndate5").innerHTML = ""
    }


}