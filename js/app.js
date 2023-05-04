//Variables
const resultado = document.querySelector('#resultado');
const year = document.querySelector('#year');
const max = new Date().getFullYear();
const min = max - 20;

//Eventos
document.addEventListener('DOMContentLoaded',() =>{
    mostrarAutos(); //muestra los autos

    //llenar las opciones de años
    llenarSelect();
})

//Funciones
function mostrarAutos(){
    autos.forEach(auto =>{
        const{marca,modelo,year,puertas,transmision,precio,color} = auto;
        const autoHTML = document.createElement('P');
        autoHTML.textContent=`
            ${marca} ${modelo} - ${year}- ${puertas} puertas - transmision ${transmision} - precio ${precio} - color ${color}
        `;

        //insertar HTML

        resultado.appendChild(autoHTML);
    })
}

//Generar los años del select

function llenarSelect(){
    for (let i = max; i >= min; i--){
        const option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        year.appendChild(option);

    }
}