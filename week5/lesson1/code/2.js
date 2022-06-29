let coffees = ['Expresso', 'Americano', 'Capuchino', 'Green Tea', 'Black Tea'];

// let coffee = coffees.shift();

// console.log(coffee.toString());

// console.log(coffees.toString());

// coffees.unshift(coffee);


// console.log(coffees.toString());

// for(let i=0; i < coffees.length; ++i) {
//     console.log(i + " " + coffees[i]);
// }

// delete coffees[0];


// for(let i=0; i < coffees.length; ++i) {
//     console.log(i + " " + coffees[i]);
// }

// coffees.splice(2, 1);

// for(let i=0; i < coffees.length; ++i) {
//     console.log(i + " " + coffees[i]);
// }


let copyCoffees = coffees.slice(1, 4);


for(let i=0; i < copyCoffees.length; ++i) {
    console.log(i + " " + copyCoffees[i]);
}

// for(let x of coffees) {
//     console.log(x);
// }

