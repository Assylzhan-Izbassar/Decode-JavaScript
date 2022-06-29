let coffees = ['Expresso', 'Americano', 'Capuchino', 'Green Tea', 'Black Tea'];


document.write(coffees.toString());

document.write("<hr>");

document.write(coffees.join(" * "));

for(let i=0; i < coffees.length; ++i) {
    coffees[i] += ` $ ${i + i/10}`;
}

for(let i=0; i < coffees.length; ++i) {
    console.log(coffees[i]);
}


// pop
coffees.pop();

console.log('We deleted the last element in the array');

for(let i=0; i < coffees.length; ++i) {
    console.log(coffees[i]);
}

// method push

coffees.push('Mocha');

console.log('We append the element in the array');

for(let i=0; i < coffees.length; ++i) {
    console.log(coffees[i]);
}

document.write("<hr>");

document.write(coffees.toString());
