const findTheOldest = function(people) {

    const getAge = function(birth, death) {

        if(!death) 
            death = new Date().getFullYear();
    
        return death - birth;
    };

    return people.reduce((oldest, curr) => {

        const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
        const currentAge = getAge(curr.yearOfBirth, curr.yearOfDeath);

        return currentAge > oldestAge ? curr : oldest;
    }, people[0]);
};

// Do not edit below this line
module.exports = findTheOldest;
