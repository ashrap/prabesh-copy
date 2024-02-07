function show() {
    let count = 0;

    let kundene = [];

    let film = document.getElementById("filmValg").value;
    let antall = document.getElementById("antall").value;
    let antall2 = Number(antall);
    let fornavn = document.getElementById("fornavn").value;
    let etternavn = document.getElementById("etternavn").value;
    let telefonnr = document.getElementById("telefonnr").value;
    let epost = document.getElementById("epost").value;
    let person = {
        movie: film,
        total_ticket: antall2,
        first_name: fornavn,
        last_name: etternavn,
        phone: telefonnr,
        email: epost
    };
    kundene.push(person);

    while (count <= kundene.length) {
        let html = "<table><tr><th>Film</th><th>Antall</th><th>Fornavn</th><th>Etternavn</th><th>Telefonnr</th><th>Epost</th></tr>"
        for (let i of kundene) {
            html += "<tr>" + //we add in the html var at the same time html + object properties
                "<td>" + i.movie + "</td>" +
                "<td>" + i.total_ticket + "</td>" +
                "<td>" + i.first_name + "</td>" +
                "<td>" + i.last_name + "</td>" +
                "<td>" + i.phone + "</td>" +
                "<td>" + i.email + "</td>" +
                "</tr>";
        }
        html += "</table>";  // we close the table tag opened earlier
        document.getElementById("billettene").innerHTML = html; //show the result in the browser
        count++;
    }

    document.getElementById("antall").value= " ";
    document.getElementById("fornavn").value = " ";
    document.getElementById("etternavn").value = " ";
    document.getElementById("telefonnr").value = " ";
    document.getElementById("epost").value = " ";

    this.inner = function clearKundene(){
        kundene.length = 0;
    }
}


