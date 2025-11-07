const removeFromArray = function(arr, ...args) {
    const returnedArray = [];
    for (element of arr) {
        if (!args.includes(element)) returnedArray.push(element);
    }
    return returnedArray;
};

// Do not edit below this line
module.exports = removeFromArray;
