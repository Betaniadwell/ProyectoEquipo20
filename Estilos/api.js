
const URL = "https://api.thecatapi.com/v1/images/search?limit=10";

fetch(URL)
  .then(res => res.json())
  .then(data => {
    const img = document.querySelector("img");
    img.src = data[0].url; });/////////////////////////////////////////

/* Change color*/
const boton = document.querySelector('button');
const color = document.getElementById('color');

function generar(){
let digitos = '0123456789ABCDEF';
let colorHex = "#";

for (let i=0; i < 6; i++) {
 let indiceAl= Math.floor(Math.random() * 16) ;
 colorHex += digitos[indiceAl];
}
 return colorHex;

}

boton.addEventListener('click', function() {
  let colorAl = generar();
  color.textContent = colorAl;
  document.body.style.backgroundColor= colorAl;
});

