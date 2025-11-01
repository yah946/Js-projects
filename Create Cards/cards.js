//Arrays
let names=['Ahmed', 'Adam', 'Ayman', 'Ali', 'Sami', 'Soufyan', 'Othman', 'Ossama', 'Mohamed', 'El Habib'];
let ages=['18 years old','19 years old','20years old','33 years old','20 years old','18 years old','42 years old','31 years old','36 years old','12 years old'];

//body
let container = document.createElement('div');
document.body.appendChild(container);
container.style.textAlign='center';

function cards (names, ages){
    //create Elements
    let card = document.createElement('div');
    let title = document.createElement('h2');
    let years = document.createElement('p');
    let image = document.createElement('img');
    
    //add content
    let head = document.createTextNode(names);
    let age = document.createTextNode(ages);
    image.src='https://c.wallhere.com/photos/42/2b/Cinema_4D_Stuart_Lippincott_stuz0r_digital_art_rocks_sky_mountain_chain_portrait_display-2289830.jpg!s1';

    title.appendChild(head);
    years.appendChild(age);
    
    card.appendChild(title);
    card.appendChild(years);
    card.appendChild(image);
    container.appendChild(card);

    //style
    let cdSty=card.style
    cdSty.width='200px';
    cdSty.backgroundColor='brown';
    cdSty.padding='8px';
    cdSty.margin='4px';
    cdSty.color='White';
    cdSty.display='inline-block'

    image.style.width= '100%';
}
for ( i = 0 ; i < 10 ; i++){
    cards (names[i],ages[i]);
}
