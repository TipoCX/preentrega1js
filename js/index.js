const Cuotas = 4;
const Precio = 1000;
const Interes = 0.4;
let preciofinalcuotas = Precio;
let ahorro = 100_000;

function calcular(cuotas, precio, interes) {
    if (interes == 0 && cuotar == 1) {
        return preciofinalcuotas;
    } else {
        preciofinalcuotas = (precio + (precio * interes)) / cuotas;
        return preciofinalcuotas;
    }
}




console.log(
    calcular(Cuotas, Precio, Interes)
);

//algo tenia que hacer con un loop
while (Cuotas > 0) {
    Cuotas = Cuotas - 1;
    ahorro = ahorro - preciofinalcuotas;
    console.log(ahorro);
}
