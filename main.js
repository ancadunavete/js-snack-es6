/*Snack 1
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore.

Snack2
Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

Snack 3 (Bonus)
Scrivere una funzione che accetti tre argomenti, un array ( esempio: ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'] )e due numeri (a più piccolo di b).
La funzione ritornerà un nuovo array con li elementi estratti dall'array di partenza che hanno la posizione compresa tra i due numeri (a e b).*/


const biciDaCorsa = [
    { nome: "Speedster 3000", peso: 7.5 }, 
    { nome: "Lightning Pro", peso: 6.8 }, 
    { nome: "Carbon X", peso: 7.2 }, 
    { nome: "Aero Racer", peso: 7.9 },
    { nome: "Mountain Climber", peso: 6.5}
]

let biciPiuLeggera = biciDaCorsa[0]

for (let i = 1; i < biciDaCorsa.length; i++ ) {
    let elemento = biciDaCorsa[i]

    if (elemento.peso < biciPiuLeggera.peso) {
        biciPiuLeggera = elemento
    }

}

console.log(biciPiuLeggera)


//--


const squadreCalcio = [
{ nome: "Juventus", punti: 0, falliSubiti: 0 }, 
{ nome: "Milan", punti: 0, falliSubiti: 0 },
{ nome: "Inter", punti: 0, falliSubiti: 0 }, 
{ nome: "Napoli", punti: 0, falliSubiti: 0 }, 
{ nome: "Roma", punti: 0, falliSubiti: 0 }
];


function numRandom(min, max){
return Math.floor(Math.random() * max) + min;
}

for (const index in squadreCalcio) {
let elemento = squadreCalcio[index]
elemento.punti = numRandom(1, 50) 
elemento.falliSubiti = numRandom(1, 50)

newArray.push(
    {
    nome: elemento ["nome"],
    falliSubiti: elemento["falliSubiti"]
    })
}

console.log(squadreCalcio, newArray)

