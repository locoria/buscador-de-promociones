const promociones = [
    {nombre: 'gastronomia'},
    {nombre: 'espectaculos'},
    {nombre: 'supermiercoles'},
    {nombre: 'viajes'},
    {nombre: 'sorpresa'},
    {nombre: 'women'},
    {nombre: 'visa'},
    {nombre: 'amex'},
    {nombre: 'mastercard'},
    {nombre: 'superclub'},
    {nombre: 'nova'},
]





const formulario = document.querySelector('#formulario');
const boton = document.querySelector('#boton');
const resultado = document.querySelector('#resultado');

const filtrar = ()=>{
    resultado.innerHTML = ''; 

const texto = formulario.value.toLowerCase();

for(let promocion of promociones){
    let nombre = promocion.nombre.toLocaleLowerCase();
    if(nombre.indexOf(texto) !== -1){
    resultado.innerHTML += `
    <li>${promocion.nombre} </li>
    `
 
}
}

if(resultado.innerHTML === ''){
    resultado.innerHTML += `
    <li>Promocion no encontrada... </li>
    `

}


}

boton.addEventListener('click' , filtrar)