let billetene = [];

function show() {

    let filmValg = document.getElementById("filmValg").value;
    let antall = document.getElementById("antall").value;
    let antalll_value = Number(antall);
    let fornavn = document.getElementById("fornavn").value;
    let etternavn = document.getElementById("etternavn").value;
    let telefonnr = document.getElementById("telefonnr").value;
    let epost = document.getElementById("epost").value;
    let regExp = /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/gm // test for epost
    let regExp1 = /^[0-9]+$/ // test for telefonnr

    if(antall.length === 0 || fornavn.length === 0 || etternavn.length === 0 || telefonnr.length === 0 || epost.length === 0){
        document.getElementById("antallError").innerHTML = "Må skrive noe inn in antall."
        document.getElementById("fornavnError").innerHTML = "Må skrive noe inn i fornavnet";
        document.getElementById("etternavnError").innerHTML = "Må skrive noe inn i ettternavnet";
        document.getElementById("telefonError").innerHTML = "Må skrive noe inn i telefonnr";
        document.getElementById("epostError").innerHTML = "Må skrive noe inn i epost";
    }
    else {
        if(regExp.test(epost) && regExp1.test(telefonnr)) {
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

            document.getElementById("antallError").innerHTML = " "
            document.getElementById("fornavnError").innerHTML = " ";
            document.getElementById("etternavnError").innerHTML = " ";
            document.getElementById("telefonError").innerHTML = " ";
            document.getElementById("epostError").innerHTML = " ";
        }
        else {
            alert("Please enter valid email address.")
        }
    }

}

function slett_billettene() {
    billetene = [];

    let html = "<table><tr><th>Film</th><th>Antall</th><th>Fornavn</th><th>Etternavn</th><th>Telefonnr</th><th>Epost</th></tr></table>"

    document.getElementById("billettene").innerHTML = html; //show the result in the browser

    console.log("length of billettene is " + billetene.length);

}