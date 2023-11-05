import { MONEY } from "../../constants";
class CalcMoney {
    calcReturnMoney(matches) {
        const keys = Object.keys(matches)
        let returnMoney = 0;
        for (const key of keys) {
            switch (key) {
                case 'three':
                    returnMoney += matches[key] * MONEY.THREE;
                break;
                case 'four':
                    returnMoney += matches[key] * MONEY.FOUR;
                break;
                case 'five':
                    returnMoney += matches[key] * MONEY.FIVE;
                break;
                case 'bonus':
                    returnMoney += matches[key] * MONEY.BONUS;
                break;
                case 'six':
                    returnMoney += matches[key] * MONEY.SIX;
                break;
            }
        }
        return returnMoney;
    }

    calcReturnRate(returnMoney, payMoney) {
        const returnRate = (returnMoney/payMoney*100).toFixed(1);
        return parseFloat(returnRate);
    }
}

export default CalcMoney;