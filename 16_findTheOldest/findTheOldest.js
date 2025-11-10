const findTheOldest = function(arr) {
    return arr.sort( function (lastPerson, nextPerson) { 
        const currentYear = new Date().getFullYear();
        if (!lastPerson.yearOfDeath) lastPerson.yearOfDeath = currentYear;
        if (!nextPerson.yearOfDeath) nextPerson.yearOfDeath = currentYear;
        return (nextPerson.yearOfDeath - nextPerson.yearOfBirth) - (lastPerson.yearOfDeath - lastPerson.yearOfBirth);
    })[0]};

// Do not edit below this line
module.exports = findTheOldest;
