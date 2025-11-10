const fibonacci = function(memberNumber) {
    const n = parseInt(memberNumber);
    if (n < 0) return 'OOPS';
    const noOfFibonaccis = 45;
    const fibArr = [0,1];
    for (let i = 1; i < noOfFibonaccis; i++) {
        fibArr.push(fibArr[fibArr.length-1] + fibArr[fibArr.length - 2]);
    }
    return fibArr[n];
};

// Do not edit below this line
module.exports = fibonacci;
