const reverseString = function(stringToReverse) {
    let stringLength = stringToReverse.length;
    let reversedString = "";
    for (let i = stringLength; i >= 0; i--)
        {
            reversedString += stringToReverse.charAt(i);
        }
        return reversedString
};

// Do not edit below this line
module.exports = reverseString;
