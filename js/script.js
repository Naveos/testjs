theme = "sombre"
prenom = "noDef"
nom = "noDef"
continent = "noDef"

//theme

function changeTheme() {
    if (theme == "sombre") {
        themeClair()
    }
    else {
        themeSombre()
    }
    console.log("theme changed")
}

function themeClair() {
    document.getElementById("header").style.backgroundColor = "#cacaca";
    document.getElementById("text").style.backgroundColor = "#ffffff";
    document.getElementById("body").style.backgroundColor = "#969696";
    document.getElementById("body").style.color = "#000000";
    theme = "clair"
}
function themeSombre() {
    document.getElementById("header").style.backgroundColor = "#2c2c2c";
    document.getElementById("text").style.backgroundColor = "#000000";
    document.getElementById("body").style.backgroundColor = "#3a3a3a";
    document.getElementById("body").style.color = "#ffffff";
    theme = "sombre"
}

//form

function submitBtn() {
    console.log("submited");
    prenom = document.getElementById("fname");
    nom = document.getElementById("lname");
    continent = document.getElementById("continent");
    String(prenom)
    String(nom)
    String(continent)
    alert(prenom);
    alert(nom);
    alert(continent);
}
function invalid () {
    console.log("invalid");
    document.getElementById("submit").style.backgroundColor = "#ff0000";
    sleep(1000);
    document.getElementById("submit").style.backgroundColor = "#686868";
}