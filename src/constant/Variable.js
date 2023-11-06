const VARIABLE = {
    money: {
        three: 5000,
        four: 50000,
        five: 1500000,
        fiveBonus: 30000000,
        six: 2000000000,
    },
    result: {
        three: 0,
        four: 0,
        five: 0,
        fiveBonus: 0,
        six: 0,
    }
};

Object.freeze(VARIABLE.money);

export default VARIABLE;