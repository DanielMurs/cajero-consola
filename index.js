/* dependencias */
require('colors');
const rl = require('readline').createInterface(process.stdin, process.stdout)

console.log('#############\n'.yellow)

/* denominaciones de billetes */
const billetes = [500, 200, 100, 50, 20, 10, 5, 2, 1]

/* input que devuelve la cantidad ingresada en una función */
rl.question('Ingresa la cantidad de dinero aqui: '.cyan + '$'.white , (dinero) => {
    
    /* dinero parseado */
    dinero = Number(dinero)

    /* cantidad de billetes a entregar */
    let cantidades = {'500': 0, '200': 0, '100': 0, '50': 0, '20': 0, '10': 0, '5': 0, '2': 0, '1': 0}

    /* ciclo que recorre las denominaciones y determina la cantidad de billetes */
    billetes.map((billete) => {
        cantidades[billete.toString()] = Math.floor(dinero / billete)
        dinero -= cantidades[billete.toString()] * billete
    })

    /* impresión en consola de la cantidad de billetes */
    console.log('\nentregar las siguientes denominaciones: \n'.cyan)
    Object.keys(cantidades).reverse().forEach( (billete)=> {
        console.log(`- $${billete}: `.green + cantidades[billete])
    })

    /* exits */
    console.log('\n#############\n'.yellow)
    process.exit()
})