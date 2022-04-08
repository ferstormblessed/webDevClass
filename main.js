function writeBook() {
    var randNum = Math.random() * 5;
    randBook = Math.floor(randNum);

    var books = ['The Way of Kings',
                 'Words of Radiance',
                 'Oathbringer',
                 'Rhythm of War',
                 'Mistborn: The Final Empire'];
    var bgImages = ['twok.jpeg',
                    'wor.jpeg',
                    'oath.jpeg',
                    'row.jpeg',
                    'mistborn.jpeg'];

    var elem_title = document.getElementById('book-title');
    var elem_bg = document.getElementById('the-bg');

    /*Change title*/
    elem_title.innerHTML = books[randBook];

    /*Change background*/
    var url = "url( )"
    var bg_img = url.replace(" ", bgImages[randBook]);
    elem_bg.style.backgroundImage = bg_img;
}

function goHome() {
    var elem_title = document.getElementById('book-title');
    var elem_bg = document.getElementById('the-bg');

    elem_title.innerHTML = "BRANDO SANDO MANDO BOOKS";
    elem_bg.style.backgroundImage = "url(sanderlanche.gif)";
}