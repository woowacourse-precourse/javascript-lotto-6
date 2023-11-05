const validator = (MONEY) => {
    const MONEY_ARR = MONEY.split("");
    MONEY_ARR.forEach(v => {
        if (isNaN(v)) throw new Error("[ERROR] 문자열입력 금지");
    })
    if (parseInt(MONEY) % 1000 !== 0) throw new Error("[ERROR] 천원 단위만");
};

export default validator;