const sumAll = function(a, b) {
    if (Number.isInteger(a) && Number.isInteger(b) && a >= 0 && b >= 0) {
        if (a < b) {
            const rangeArray = [];
            for (a; a <= b; a++) rangeArray.push(a);
            return rangeArray.reduce((sum, n) => sum + n);
        }

        else {
            const rangeArray = [];
            for (b; b <= a; b++) rangeArray.push(b);
            return rangeArray.reduce((sum, n) => sum + n);
        }

    }

    else return 'ERROR';

};

// Do not edit below this line
module.exports = sumAll;
