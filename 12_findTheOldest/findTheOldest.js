const findTheOldest = function(people) {
    return people.reduce((oldest, p) => {
        if (!oldest) {
            return p;
        }
        const years = (p.yearOfDeath || (new Date()).getFullYear()) - p.yearOfBirth;
        const yearsOldest = (oldest.yearOfDeath || (new Date()).getFullYear()) - oldest.yearOfBirth;
        if (years > yearsOldest) {
            return p;            
        }
        return oldest;
    }, null);
};

// Do not edit below this line
module.exports = findTheOldest;
