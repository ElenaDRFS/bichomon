console.log(document.title);

// cambiamos título 

document.querySelector('#gen-1').innerHTML = 'Generasión 1 Pokimon';


// cambiar fondo

let fondo = document.querySelectorAll('.infocard');
for(i=0; i < 151; i++){
    fondo[i].style.backgroundColor = 'yellow';
}

// imprime URL de la página

let voladores = document.getElementsByClassName('itype flying');

for(i=0; i < voladores.length; i++){
    voladores[i].style.backgroundColor = 'pink';

}

//sustituir src por

/*let photo = document.querySelectorAll('img');
for (i=0; i<photo.length; i++){
    photo[i].setAttribute('src','https://media.giphy.com/media/2v170e71aanfi/giphy.gif');

}
*/


// imprime el dominio

console.log(location.hostname);

// imprime la url

console.log(window.location.href);