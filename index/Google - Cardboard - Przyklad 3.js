function nazwaFunkcji(A, B, C) {
    return A + B + C;
}

// wyświetlenie danych w konsoli przeglądarki
console.log(nazwaFunkcji(2, 4, "laborka"))

var przykladTworzeniaObiektu = { laboratorium: "PAI", prowadzący: "MarekDarek", rok: 2020 };

// wyświetlenie danych w konsoli przeglądarki
console.log(przykladTworzeniaObiektu)

// JS umożliwia dodawanie pól do obiektu 
przykladTworzeniaObiektu["nowepole"] = "wartosc nowego pola"

// wyświetlenie danych w konsoli przeglądarki
console.log(przykladTworzeniaObiektu)

// JS umożlwia wyciągniecie elementu HTML do zmiennej np. za pomocą id elementu
//https://developer.mozilla.org/pl/docs/Web/API/Document/getElementById
var element = document.getElementById('id_zmieniajacego_tekst_elementu');
console.log("Tutaj podany element będzie nulem gdyż podczas ładowania skryptu obiekt HTML jeszcze nie zdążył powstać", element)

window.onload = function () {
    element = document.getElementById('id_zmieniajacego_tekst_elementu');
    console.log("Tutaj już nie jest nulem", element)

};

var firstSecond = true;


// funkcja setInterval wywołuje podaną w pierwszym parametrze funkcję co czas podany w drugim parametrze.
setInterval(function () {
    if (firstSecond) {
        // zmiana tekstu wewnątrz elementu oraz ustwienie atrybutu wyrównania
        element.innerHTML = "Pierwszy tekst";
        element.setAttribute("align", "center");

    }
    else {
        element.innerHTML = "Drugi tekst";
        element.setAttribute("align", "left");
    }
    firstSecond = !firstSecond;
}, 500);



