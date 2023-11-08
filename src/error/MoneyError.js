import ERROR from '../constants/Error';

function checkMoney(money) {
    if (money % 1000 === 0) {
        throw new Error(ERROR.MONEY_UNIT);
    }

    if (!isNaN(money)) {
        throw new Error(ERROR.MONEY_NUMBER);
    }
}


export default checkMoney;
