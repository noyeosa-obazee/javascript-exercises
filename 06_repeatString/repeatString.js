const repeatString = function(string, num) {

    if (num >= 0) {
    let buildingString = '';

    for(let i = 0; i < num; i++) buildingString+=string

    return buildingString;
    }

    else return 'ERROR';

};

// Do not edit below this line
module.exports = repeatString;
