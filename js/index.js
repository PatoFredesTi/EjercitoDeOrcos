const ejercito = [];
const eliminarEjercito = async function(){
    let res = await Swal.fire({
        title: `${ejercito[this.nro].nombre} Sera asesinado por la aparicion?`,
        showCancelButton:true,
        confirButtonText:"Si ... ASESINALO!"
    });
    if(res.isConfirmed){
        ejercito.splice(this.nro,1);
        cargarTabla();
        Swal.fire("SOLDADO ASESIANDO!");
    }else{
        Swal.fire("Aun hay bondad en tu corazon");
    }
};


const cargarTabla = () =>{
    let tbody = document.querySelector("#tabla-tbody");
    tbody.innerHTML = "";
    for(let i = 0; i < ejercito.length; ++i){
        let e = ejercito[i];
        let tr = document.createElement("tr");
        let tdNro = document.createElement("td");
        tdNro.innerText = (i+1);
        let tdNombre = document.createElement("td");
        tdNombre.innerText = e.nombre;
        let tdRaza = document.createElement("td");
        tdRaza.innerText = e.raza;
        let tdRango = document.createElement("td");
        tdRango.innerText = e.rango;
        let tdVinculo = document.createElement("td");
        tdVinculo.classList.add("text-center");

        let boton = document.createElement("button");
        boton.classList.add("btn","btn-danger");
        boton.innerText = "Asesinado por la aparicion";
        boton.nro = i;
        boton.addEventListener("click",eliminarEjercito);

        tdVinculo.appendChild(boton);
        tr.appendChild(tdNombre);
        tr.appendChild(tdRaza);
        tr.appendChild(tdRango);
        tr.appendChild(tdVinculo);
        tbody.appendChild(tr);
    }
};

document.querySelector("#registrar-btn").addEventListener("click", ()=>{
    let nombre = document.querySelector("#nombre-txt").value;
    let raza = document.querySelector("#Raza-select").value;
    let rango = document.querySelector("#Rango-select").value;

    let soldado = {};
    soldado.nombre = nombre;
    soldado.raza = raza;
    soldado.rango = rango;
    ejercito.push(soldado);
    cargarTabla();
    Swal.fire("Perfecto","Soldado Registrado","success");
});