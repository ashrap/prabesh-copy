function increaseWidth(x){
    var numberOfCharacters = x.value.length;
    if(numberOfCharacters >= 3){
        var length = numberOfCharacters + "ch";
        x.style.width = length;
    }
}

let billetene = [];

function show() {

    let filmValg = document.getElementById("filmValg").value;
    let antall = document.getElementById("antall").value;
    let antall_value = Number(antall);
    let fornavn = document.getElementById("fornavn").value;
    let etternavn = document.getElementById("etternavn").value;
    let telefonnr = document.getElementById("telefonnr").value;
    let epost = document.getElementById("epost").value;
    let regExp = /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/gm; // test for epost
    let regExp1 = /^(0047|\+47|47)?[2-9]\d{7}$/; // test for telefonnr

    if (filmValg == "Velg Film Her" && antall == "" && fornavn == "" && etternavn == "" && telefonnr == "" && epost == "") {
        document.getElementById("filmValgError").innerHTML = "Må velge filmen.";
        document.getElementById("antallError").innerHTML = "Må skrive noe inn in antall."
        document.getElementById("fornavnError").innerHTML = "Må skrive noe inn i fornavnet";
        document.getElementById("etternavnError").innerHTML = "Må skrive noe inn i ettternavnet";
        document.getElementById("telefonError").innerHTML = "Må skrive noe inn i telefonnr";
        document.getElementById("epostError").innerHTML = "Må skrive noe inn i epost";
    }
    else if (filmValg == "Velg Film Her" || antall == "" || fornavn == "" || etternavn == "" || telefonnr == "" || epost == ""){
        alert("Vennligst skriv inn gyldige data!")
    }
    else {
        if(isNaN(antall_value)===true){
            document.getElementById("filmValgError").innerHTML = " ";
            document.getElementById("antallError").innerHTML = "Vennligst skriv inn gyldig tall."
            document.getElementById("fornavnError").innerHTML = " ";
            document.getElementById("etternavnError").innerHTML = " ";
            document.getElementById("telefonError").innerHTML = " ";
            document.getElementById("epostError").innerHTML = " ";
        }
        else if (regExp1.test(telefonnr)===false) {
            document.getElementById("filmValgError").innerHTML = " ";
            document.getElementById("antallError").innerHTML = " "
            document.getElementById("fornavnError").innerHTML = " ";
            document.getElementById("etternavnError").innerHTML = " ";
            document.getElementById("telefonError").innerHTML = "Feil telefon nummer";
            document.getElementById("epostError").innerHTML = " ";
        } else if (regExp.test(epost)===false) {
            document.getElementById("filmValgError").innerHTML = " ";
            document.getElementById("antallError").innerHTML = " "
            document.getElementById("fornavnError").innerHTML = " ";
            document.getElementById("etternavnError").innerHTML = " ";
            document.getElementById("telefonError").innerHTML = " ";
            document.getElementById("epostError").innerHTML = "Feil Epost";
        } else {
            let person = {
                filmValg: filmValg,
                antall: antall_value,
                fornavn: fornavn,
                etternavn: etternavn,
                telefonnr: telefonnr,
                epost: epost
            }


            billetene.push(person);

            // Initialisering av verdiene
            document.getElementById("filmValg").value = "Velg Film Her";
            document.getElementById("antall").value = "";
            document.getElementById("fornavn").value = "";
            document.getElementById("etternavn").value = "";
            document.getElementById("telefonnr").value = "";
            document.getElementById("epost").value = "";

            let html = "<table><tr><th>Film</th><th>Antall</th><th>Fornavn</th><th>Etternavn</th><th>Telefonnr</th><th>Epost</th></tr>"
            for (let i of billetene) {
                html += "<tr>" + //we add in the html var at the same time html + object properties
                    "<td align='center'>" + i.filmValg + "</td>" +
                    "<td align='center'>" + i.antall + "</td>" +
                    "<td align='center'>" + i.fornavn + "</td>" +
                    "<td align='center'>" + i.etternavn + "</td>" +
                    "<td align='center'>" + i.telefonnr + "</td>" +
                    "<td align='center'>" + i.epost + "</td>" +
                    "</tr>";
            }
            html += "</table>";  // we close the table tag opened earlier
            document.getElementById("billettene").innerHTML = html; //show the result in the browser

            document.getElementById("filmValgError").innerHTML = " ";
            document.getElementById("antallError").innerHTML = " "
            document.getElementById("fornavnError").innerHTML = " ";
            document.getElementById("etternavnError").innerHTML = " ";
            document.getElementById("telefonError").innerHTML = " ";
            document.getElementById("epostError").innerHTML = " ";
        }
    }
}

function slett_billettene() {
    billetene = [];

    let html = "<table><tr><th>Film</th><th>Antall</th><th>Fornavn</th><th>Etternavn</th><th>Telefonnr</th><th>Epost</th></tr></table>"

    document.getElementById("billettene").innerHTML = html; //show the result in the browser

    console.log("length of billettene is " + billetene.length);

}