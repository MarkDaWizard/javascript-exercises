const sumAll = function (numStart, numEnd) {
    //Check for invalid data
    if ((!Number.isInteger(numStart) || !Number.isInteger(numEnd))
         || (numStart < 0 || numEnd < 0)) {
        return "ERROR"
    }


    let sumOfAll = 0;

    if (numStart <= numEnd) {
        let temp = numStart;
        numStart = numEnd;
        numEnd = temp;
    }

    for (let i = numEnd; i <= numStart; i++) {
        sumOfAll += i;
    }
    return sumOfAll;
};

// Do not edit below this line
module.exports = sumAll;
