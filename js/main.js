let pierwsza="szafka1";
document.getElementById("opis"); //stwórz zmienną o dowolnej nazwie i przypisz do niej paragraf

let druga="szafka2";
document.querySelector("button"); //stwórz kolejną zmienną i przypisz do niej button (przy użyciu document.querySelector)

function mojaFunkcja(){
    let myHeading = document.querySelector('p');
    myHeading.textContent='Akademia 108';
} //Do buttona dodaj zdarzenie onclick, po którym zostanie wywołana funkcja. Funkcja ma dodać do paragrafu tekst "Akademia 108".
