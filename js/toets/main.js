const fruit = ['Appel', 'Banaan']; //array
console.log(fruit.length);

let l = 2; //number
const m = 3; //number

console.log(l);

let hege = ['Cecilie', 'Lone']; //array
let stale = ['Emil', 'Tobias', 'Linu']; //array
let children = hege.concat(stale); //concat

let str = 'Hoi ik ben Levi'; //string
let res = str.replace('Levi', 'Niemand'); //replace

let str1 = 'Hallo ik ben weer levi!'; //string
let res1 = str1.substring(1, 4); //sub the string

let str2 = 'Dit is een javascript toets'; //string
let res2 = str2.split(" "); //replace string

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

let num1 = 1; //number
let num2 = 3; //number

/*
 * Deze functie rekenen heeft 2 parameters
 * Die telt hij bij elkaar op
 * Van het totaal word een alert gegeven
 */

function rekenen(a = 1, b = 1) {
    const total = a + b; //total number
    alert(total);
}
rekenen();

for (let i = 0; i < items.length; i++) {
    console.log('test' + i);
    const kleuren = ['red', 'blue', 'green', 'yellow', 'purple', 'orange', ' burleywood']; //array


    items[i].style.backgroundColor = kleuren[i];
    items[i].textContent = 'hallo';
}



console.log(Math.random());

function color() {
    const i = math.random(); //random number
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