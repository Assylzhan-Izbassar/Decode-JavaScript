// continue

let i = 0;

let n = +(prompt('Enter a boundary (number): '));

do {

    if(i === 4) {
        i++;
        continue;
    } else {
        console.log(i);
    }
    i++;

} while(i < n);