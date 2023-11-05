import { MONEY } from "../../constants/index.js";
class CalcMoney {
    calcReturnMoney(matches) {
        const keys = Object.keys(matches)
        let returnMoney = 0;
        for (const key of keys) {
            returnMoney += matches[key] * MONEY[key];
        }
        return returnMoney;
    }

    calcReturnRate(returnMoney, payMoney) {
        const returnRate = (returnMoney/payMoney*100).toFixed(1);
        return parseFloat(returnRate);
    }
}

export default CalcMoney;