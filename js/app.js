//Variables
const marca= document.querySelector('#marca');
const year = document.querySelector('#year');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');


const resultado = document.querySelector('#resultado');
const max = new Date().getFullYear();
const min = max - 20;

//Generar objeto

const datosBusqueda ={
    marca:'',
    year:'',
    minimo:'',
    maximo:'',
    puertas:'',
    transmision:'',
    color:'',
}

//Eventos
document.addEventListener('DOMContentLoaded',() =>{
    mostrarAutos(autos); //muestra los autos

    //llenar las opciones de años
    llenarSelect();
})

//Event listener para select de busqueda
marca.addEventListener('change',(e)=>{
    datosBusqueda.marca = e.target.value;

    filtrarAuto();
})
year.addEventListener('change',(e)=>{
    datosBusqueda.year = parseInt(e.target.value);

    filtrarAuto();
})
minimo.addEventListener('change',(e)=>{
    datosBusqueda.minimo = e.target.value;

    filtrarAuto();
})
maximo.addEventListener('change',(e)=>{
    datosBusqueda.maximo = e.target.value;
    filtrarAuto();
})
puertas.addEventListener('change',(e)=>{
    datosBusqueda.puertas = parseInt(e.target.value) ;
    filtrarAuto()
})
transmision.addEventListener('change',(e)=>{
    datosBusqueda.transmision = e.target.value;
    filtrarAuto()
})

color.addEventListener('change',(e)=>{
    datosBusqueda.color = e.target.value;
    filtrarAuto()
    console.log(datosBusqueda);

})

//Funciones
function mostrarAutos(autos){
    limpiarHTML()
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
//Limpiar HTML

function limpiarHTML(){
    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild);
    }
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

function filtrarAuto(){
    const resultado = autos.filter(filtrarMarca).filter(filtrarYear).filter(filtrarMinimo).filter(filtrarMaximo).filter(filtrarPuertas).filter(filtrarTransmision).filter(filtrarColor);
    mostrarAutos(resultado);
    console.log(resultado);

    if(resultado.length){
        mostrarAutos(resultado);
    }else{
        noResultado();
    }
}

function noResultado(){
    limpiarHTML();

    const nr = document.createElement('DIV');
    nr.classList.add('alerta','error');
    nr.textContent = 'No hay resultados, Intenta con otros filtros de busqueda';
    resultado.appendChild(nr)
}

function filtrarMarca(auto){
  if(datosBusqueda.marca){
     return auto.marca === datosBusqueda.marca
 }
 return auto;
}

function filtrarYear(auto){
    if(datosBusqueda.year){
       return auto.year === datosBusqueda.year
   }
   return auto;
  }

  function filtrarMinimo(auto){
    if(datosBusqueda.minimo){
       return auto.precio >= datosBusqueda.minimo
   }
   return auto;
  }

  function filtrarMaximo(auto){
    if(datosBusqueda.maximo){
       return auto.precio <= datosBusqueda.maximo
   }
   return auto;
  }

  function filtrarPuertas(auto){
    if(datosBusqueda.puertas){
       return auto.puertas === datosBusqueda.puertas
   }
   return auto;
  }

  function filtrarTransmision(auto){
    if(datosBusqueda.transmision){
       return auto.transmision === datosBusqueda.transmision
   }
   return auto;
  }


  function filtrarColor(auto){
    if(datosBusqueda.color){
       return auto.color === datosBusqueda.color
   }
   return auto;
  }