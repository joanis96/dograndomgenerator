// API à utiliser pour les images de chiens: https://dog.ceo/api/breeds/image/random
const apiurl = 'https://dog.ceo/api/breeds/image/random';
const dogsImg = document.querySelector('#dogsAPI');
const randmbtn = document.querySelector('#btn');
let dogId = document.querySelector('#dogId');
let dogAge = document.querySelector('#dogAge');
let registry = document.querySelector('#dogRegistry');

randmbtn.addEventListener("click",dogsRandGen);

function dogsRandGen() {
    fetch(apiurl)
    .then((res) => (res.json()))
    .then(data => {
        dogsImg.src = data.message
    });
    dogId.innerHTML = Math.floor(Math.random() * 30000) + 10000;
    dogAge.innerHTML = Math.floor(Math.random() * 19) + 1 + " years";
    registry.innerHTML = Math.floor(Math.random() * 500) + 40;
}
dogId.onclick = function() {
    alert("HI there is my id");
}

dogAge.onclick = function() {
    alert("Hiii here is my age !!");
    dogAge.innerHTML = Math.floor(Math.random() * 19);
    Math.floor(Math.random() * 19);
}

registry.onclick = function() {
    alert("Hiiiii, here is my registry number man !!");
}



