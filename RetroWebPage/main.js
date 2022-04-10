function writeBook() {
    var randNum = Math.random() * 20;
    randBook = Math.floor(randNum);

    var books = ['The Way of Kings',
                 'Words of Radiance',
                 'Edgedancer',
                 'Oathbringer',
                 'Dawnshard',
                 'Rhythm of War',
                 'Mistborn: The Final Empire',
                 'The Well of Ascension',
                 'The Hero of Ages',
                 'The Alloy of Law',
                 'Shadows of Self',
                 'The Bands of Mourning',
                 'Warbreaker',
                 'Elantris',
                 'Whitesand',
                 'Arcanum Unbounded',
                 'Skyward',
                 'Starsight',
                 'Cytonic',
                 'The Rithmatist'
                ];
    var bgImages = ['twok.jpeg',
                    'wor.jpeg',
                    'edgedancer.jpeg',
                    'oath.jpeg',
                    'dawnshard.jpeg',
                    'row.jpeg',
                    'mistborn.jpeg',
                    'mistborn2.jpeg',
                    'mistborn3.jpeg',
                    'mistborn4.jpeg',
                    'mistborn5.jpeg',
                    'mistborn6.jpeg',
                    'warbreaker.jpeg',
                    'elantris.jpeg',
                    'whitesand.jpeg',
                    'arcanum.jpeg',
                    'skyward.jpeg',
                    'starsight.jpeg',
                    'cytonic.jpeg',
                    'theRithmatist.jpeg'];

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