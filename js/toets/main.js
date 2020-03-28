const fruit = ['Appel', 'Banaan'];
console.log(fruit.length);

let l = 2;
const m = 3;

console.log(l);
// expected output: 2

let hege = ['Cecilie', 'Lone'];
let stale = ['Emil', 'Tobias', 'Linu'];
let children = hege.concat(stale);

let str = 'Hoi ik ben Levi';
let res = str.replace('Levi', 'Niemand');

let str1 = 'Hallo ik ben weer levi!';
let res1 = str1.substring(1, 4);

let str2 = 'Dit is een javascript toets';
let res2 = str2.split(" ");

console.log(l = m + 1);
console.log(l = l * m);
console.log(l = l % m);

console.log(l = l / m);

console.log(l = l - m);

alert('johnny de debiel');

console.dir(document);
console.log(document.getElementById('main'));
const x = document.getElementById('main');
const z = document.getElementById('hoi');



/*
 * Dit is een functie die de achtergrond kleur
 * Van de body
 * Veranderd naar zwart
 */
function bodyy() {
    document.body.style.backgroundColor = 'black';
    alert(typeof '' === 'string');
}

function hoi() {
    x.style.backgroundColor = 'blue';
    document.body.style.backgroundImage = "url('johnny.jpeg')";

}
/*
 * Dit is een functie die een alert geeft
 * Van een willekeurig getal
 * onder de 10
 */
function ja() {
    alert(Math.floor(Math.random() * 10));
}

/*
 * Dit is een functie die de achtergrond image
 * Veranderd Naar een andere image
 * En een alert geeft van de getallen van de 5 assignment operators
 */
function johnnie() {
    document.body.style.backgroundImage = "url('johnnie.jpg')";
    alert(1 + 1 * 2 / 3 - 1 % 2);
}

// maak een knop/ functie, clickmoment. Waarbij ik per element van lijst een kleur geef,
// gebaseerd op een array van kleuren. 
const items = document.getElementsByClassName('list-group-item');

let num1 = 1;
let num2 = 3;

/*
 * Deze functie rekenen heeft 2 parameters
 * Die telt hij bij elkaar op
 * Van het totaal word een alert gegeven
 */

function rekenen(a = 1, b = 1) {
    const total = a + b;
    alert(total);
}
rekenen();

for (let i = 0; i < items.length; i++) {
    console.log('test' + i);
    const kleuren = ['red', 'blue', 'green', 'yellow', 'purple', 'orange', ' burleywood'];


    items[i].style.backgroundColor = kleuren[i];
    items[i].textContent = 'hallo';
}



console.log(Math.random());

function color() {
    const i = math.random();
}
const button = document.getElementById('nee');

function hi() {
    document.getElementById('header-title').style.backgroundColor = 'white';
}

function gekkeformat() {
    // alle fonts blauwpaars.
}

function buttonClick() {
    console.log(' button is clicked');
    document.getElementById('main-header').textContent = 'Hallo dit werkt';
    document.querySelector('#main').style.backgroundColor = 'red';

    function jo() {
        document.getElementById('jo').style.backgroundColor = 'blue';
    }

}