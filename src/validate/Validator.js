import ErrorMessage from "../constants/ErrorMessage.js";
import Constants from "../constants/Constants.js";

const validator = {
    moneyValidator(MONEY) {
        const MONEY_ARR = MONEY.split("");
        MONEY_ARR.forEach(v => {
            if (isNaN(v)) throw new Error(ErrorMessage.ONLY_NUMBER);
        })
        if (parseInt(MONEY) % Constants.LOTTO_PRICE !== 0) throw new Error(ErrorMessage.THOUSAND);
    },
    bonusValidator(BONUS) {
        const BONUS_ARR = BONUS.split("");
        if (BONUS*1 !== parseInt(BONUS)) throw new Error(ErrorMessage.ONLY_INTEGER);
        BONUS_ARR.forEach(v => {
            if (isNaN(v)) throw new Error(ErrorMessage.BONUS_ONE_NUM);
        })
        if (parseInt(BONUS) <Constants.LOTTO_START || parseInt(BONUS)  > Constants.LOTTO_END) throw new Error(ErrorMessage.OUT_RANGE);
    },
    inputValidator(ANSWER) {
        const INPUT_ARR = ANSWER.split(",");
        const SET_INPUT = new Set([...INPUT_ARR]);
        INPUT_ARR.forEach(v => {
            if (isNaN(v)) throw new Error(ErrorMessage.ONLY_NUMBER);
            if (v*1 !== parseInt(v)) throw new Error(ErrorMessage.ONLY_INTEGER);
            if (parseInt(v) <Constants.LOTTO_START || parseInt(v)  > Constants.LOTTO_END) throw new Error(ErrorMessage.OUT_RANGE);
        });
        if (INPUT_ARR.length !== Constants.LOTTO_LENGTH) throw new Error(ErrorMessage.LENGTH);
        if (SET_INPUT.size !== INPUT_ARR.length) throw new Error(ErrorMessage.DUPLICATE);
    },
};
export default validator;