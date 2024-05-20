const removeFromArray = function (arrayToProcess, ...argumentToRemove) {
    
    function getIndexOfArgument(argument) {
        return arrayToProcess.indexOf(argument);
    }

    for (const arg of argumentToRemove) {
        while (getIndexOfArgument(arg) > -1) {
            arrayToProcess = 
            arrayToProcess.toSpliced(getIndexOfArgument(arg), 1);
        }
    }
    return arrayToProcess;
};

// Do not edit below this line
module.exports = removeFromArray;
