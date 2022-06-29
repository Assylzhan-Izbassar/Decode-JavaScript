// Cycles

// Вывести четные элементы от 1 до n;
// n > 1

let n = +(prompt('Enter a positive number'));

if (n > 1) {
    console.log(`Even elements between 1 to ${n}:`);
    // x / i
    for (let x = 1; x <= n; x = x + 1) {
        // % - mod => остаток от деление: пример: 12 / 5 = 2 (2 / 5); 12 mod 5 = 2 (reminder);
    
        if(x % 2 === 0) {
            console.log(x);
        }
    }
}