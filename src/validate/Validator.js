const validator = {
    moneyValidator(MONEY) {
        const MONEY_ARR = MONEY.split("");
        MONEY_ARR.forEach(v => {
            if (isNaN(v)) throw new Error("[ERROR] 문자열입력 금지");
        })
        if (parseInt(MONEY) % 1000 !== 0) throw new Error("[ERROR] 천원 단위만");
    },
    bonusValidator(BONUS) {
        const BONUS_ARR = BONUS.split("");
        if (BONUS*1 !== parseInt(BONUS)) throw new Error("[ERROR] 정수만 입력");
        BONUS_ARR.forEach(v => {
            if (isNaN(v)) throw new Error("[ERROR] 한개의 숫자만 입력");
        })
        if (parseInt(BONUS) <1 || parseInt(BONUS)  > 45) throw new Error("[ERROR] 1이상 45이하만");
    },
    inputValidator(ANSWER) {
        const INPUT_ARR = ANSWER.split(",");
        INPUT_ARR.forEach(v => {
            if (isNaN(v)) throw new Error("[ERROR] 숫자만 입력");
            if (v*1 !== parseInt(v)) throw new Error("[ERROR] 정수만 입력");
            if (parseInt(v) <1 || parseInt(v)  > 45) throw new Error("[ERROR] 1이상 45이하만");
        });
    },
};
export default validator;