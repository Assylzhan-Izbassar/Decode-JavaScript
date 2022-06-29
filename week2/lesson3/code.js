function palindrom(target) {

    let direct = '';

    target = target.toLowerCase();

    for(let i=0; i < target.length; ++i) {
        if(target[i] >= 'a' && target[i] <= 'z') {
            direct += target[i];
        }
    }

    let result = true;

    for(let i=0; i < direct.length / 2; ++i) {
        if(direct[i] !== direct[direct.length-1-i]) {
            result = false;
            break;
        }
    }

    return result;
}


function getSuccessRate(data) {
    if(data.length == 0) {
        return 0;
    }

    let count = 0;

    for(let i=0; i < data.length; ++i) {
        if(data[i] == 1) {
            count++;
        }
    }

    return Math.round((count/length)*100);
}

console.log(getSuccessRate(""));