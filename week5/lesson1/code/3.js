function getLocation(coordinates, commands) {

    for (let i=0; i < commands.length; ++i) {
        if (commands[i] == 'forward') {
            coordinates[1] += 1;
        } else if (commands[i] == 'back') {
            coordinates[1] -= 1;
        } else if (commands[i] == 'right') {
            coordinates[0] += 1;
        } else {
            coordinates[0] -= 1;
        }
    }
    return coordinates;
}

console.log(getLocation([2,2], ['back']));