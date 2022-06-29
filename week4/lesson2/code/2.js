// break

let sum = 0;

let count = 0;

// Пустое знание всегда false
// 0
// ""
// []
// {}
// null
// undefined -> false


while(true) {

    count++;

    let value = +(prompt(`Enter ${count} number`));

    if(!value) { // value = 0 => false => !false => true
        break;
    }

    sum = sum + value;
}

console.log(`Totally sum is ${sum}`);

// Если у нас значение true, то "!" она меняет на false
// Если у нас значение false, то "!" она меняет на true