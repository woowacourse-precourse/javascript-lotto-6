import ERROR from '../constants/Error';

function checkMoneyUnit(money){
    if (money % 1000 === 0){
        throw new Error(ERROR.MONEY_UNIT);
    }
}

function checkMoneyNumber(money){
    if (!isNaN(money)){
        throw new Error(ERROR.MONEY_NUMBER);
    }
}

export {checkMoneyNumber, checkMoneyUnit};
