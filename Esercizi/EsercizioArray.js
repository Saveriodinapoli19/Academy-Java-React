let libri = [{
    titolo: "Il Signore degli Anelli",
    autore: "J.R.R. Tolkien",
    annoDiPubblicazione: 1954,
    letto: true
},
{
    titolo: "Harry Potter e la Pietra Filosofale",
    autore: "J.K. Rowling",
    annoDiPubblicazione: 1997,
    letto: false
},
{
    titolo: "1984",
    autore: "George Orwell",
    annoDiPubblicazione: 1949,
    letto: true
}];
function addBook(libro){
    libri.push(libro);
}
function visualizzaLibri() {
    console.log("Lista dei libri:");
    libri.forEach(function(libro) {
        console.log("Titolo: " + libro.titolo + ", Autore: " + libro.autore + ", Letto: " + (libro.letto ? 'Sì' : 'No'));
    });
}
 visualizzaLibri();


 function cercaLibro(titolo) {
    const libroTrovato = libri.find(function(libro) {
        return libro.titolo.toLocaleLowerCase === titolo.toLocaleLowerCase;
    });
    if (libroTrovato) {
        console.log("Il libro " + titolo + " è stato trovato");
    } else {
        console.log("Il libro " + titolo + " non è stato trovato");
    }
}
cercaLibro("1984");

function rimuoviLibro(titolo) {
    const libroDaRimuovere = libri.findIndex(function(libro) {
        return libro.titolo === titolo;
    });
    if (libroDaRimuovere !== -1) {
        libri.splice(libroDaRimuovere, 1);
        console.log("Il libro " + titolo + " è stato rimosso");
    } else {
        console.log("Il libro " + titolo + " non è stato rimosso");
    }
}
    rimuoviLibro("Il Signore degli Anelli")
   
    function visualizzaLetti() {
        const libroLetto = libri.filter(function(libro) {
            return libro.letto;
        });
        console.log("Libri letti : ");
        libroLetto.forEach(function(libro) {
            console.log(libro.titolo);
        });
    }
    visualizzaLetti();
   
    function visualizzaNonLetti() {
        const libroNonLetto = libri.filter(function(libro) {
            return !libro.letto;
        });
        console.log("Libri non letti : ");
        libroNonLetto.forEach(function(libro) {
            console.log(libro.titolo);
        });
    }
    visualizzaNonLetti();

    const libro1 = {
        titolo: "A Game of Thrones",
        autore: "George R.R. Martin",
        annoDiPubblicazione: 1996,
        letto: true
    };
    addBook(libro1);
    visualizzaLibri();
    