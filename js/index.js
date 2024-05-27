let cuotas = 4;
let precio = 1000;
let interes = 0.4;
let preciofinalcuotas = precio
let ahorro = 100_000

if (interes == 0 && cuotar == 1) {
    console.log(precio)
} else {
    preciofinalcuotas = (precio + (precio * interes)) / cuotas;
    console.log(preciofinalcuotas)
}


while (cuotas > 0) {
    cuotas = cuotas - 1;
    ahorro = ahorro - preciofinalcuotas;
    console.log(ahorro)
}
