function construct_func() {
    var nameHolder;
    return {
        name: (fName, lName) => {
            nameHolder = `${fName} ${lName}`;
        },
        consoleLog: () => {
            console.log(nameHolder);
        }
    }
}

module.exports = construct_func;
