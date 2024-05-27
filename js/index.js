const Cuotas = 4;
const Precio = 1000;
const Interes = 0.4;
let preciofinalcuotas = Precio;
let saldo = 100_000;

function calcular(cuotas, precio, interes) {
    if (interes == 0 && cuotar == 1) {
        return preciofinalcuotas;
    } else {
        preciofinalcuotas = (precio + (precio * interes)) / cuotas;
        return preciofinalcuotas;
    }
}




console.log(`el valor final de cada cuota es: ${calcular(Cuotas, Precio, Interes)}`);
let aux = 1
//algo tenia que hacer con un loop
while (aux <= Cuotas) {
    saldo = saldo - preciofinalcuotas;
    console.log(`el saldo despues de la cuota ${aux} es: ${saldo}`);
    aux = aux + 1;
}
