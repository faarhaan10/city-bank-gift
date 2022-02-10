
const cardDistribution = persons => {
    let newUser = [];
    let serial = 0;

    persons.map(person => {
        // creating the data 
        const district = person.district.slice(0, 2).toUpperCase();
        const thisYear = person.currentYear.toString().slice(2);
        const postal = person.postNo.toString().slice(0, 2);
        const userBirthYear = person.birthYear.toString();
        serial += 1;
        const slNo = (serial * 1000000).toString().slice(0, 6).split("").reverse().join("");

        // generate the card 
        const cardNumber = [district, thisYear, postal, userBirthYear, slNo].join('');

        // generate gift 
        let gift;
        if (parseInt(cardNumber.slice(15)) % 2 === 0) {
            gift = 'R';
        } else {
            gift = 'W';
        }

        // making user 
        const user = { cardNumber, gift, priority: person.priority };
        newUser.push(user);
    });

    return newUser.sort((a, b) => a.priority - b.priority);
};
