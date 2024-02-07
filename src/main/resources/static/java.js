let billetene = [];

function show() {

    let filmValg = document.getElementById("filmValg").value;
    let antall = document.getElementById("antall").value;
    let antalll_value = Number(antall);
    let fornavn = document.getElementById("fornavn").value;
    let etternavn = document.getElementById("etternavn").value;
    let telefonnr = document.getElementById("telefonnr").value;
    let epost = document.getElementById("epost").value;

    let person = {
        filmValg: filmValg,
        antall: antalll_value,
        fornavn: fornavn,
        etternavn: etternavn,
        telefonnr: telefonnr,
        epost: epost
    }

    billetene.push(person);

    document.getElementById("antall").value = " ";
    document.getElementById("fornavn").value = " ";
    document.getElementById("etternavn").value = " ";
    document.getElementById("telefonnr").value = " ";
    document.getElementById("epost").value = " ";

    let html = "<table><tr><th>Film</th><th>Antall</th><th>Fornavn</th><th>Etternavn</th><th>Telefonnr</th><th>Epost</th></tr>"
    for (let i of billetene) {
        html += "<tr>" + //we add in the html var at the same time html + object properties
            "<td>" + i.filmValg + "</td>" +
            "<td>" + i.antall + "</td>" +
            "<td>" + i.fornavn + "</td>" +
            "<td>" + i.etternavn + "</td>" +
            "<td>" + i.telefonnr + "</td>" +
            "<td>" + i.epost + "</td>" +
            "</tr>";
    }
    html += "</table>";  // we close the table tag opened earlier
    document.getElementById("billettene").innerHTML = html; //show the result in the browser

    for (let i of billetene) {
        console.log(i);
    }
}

function slett_billettene(){
    billetene = [];

    let html = "<table><tr><th>Film</th><th>Antall</th><th>Fornavn</th><th>Etternavn</th><th>Telefonnr</th><th>Epost</th></tr></table>"

    document.getElementById("billettene").innerHTML = html; //show the result in the browser

    console.log("length of billettene is "+billetene.length);

}