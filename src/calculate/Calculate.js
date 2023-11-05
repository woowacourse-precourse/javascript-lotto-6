import MESSAGE from "../constant/Message";

class Calculate {
    static calculateResult(finalResult) {
      finalResult.forEach(({ lottoCount, bonusIncluded }) => {
        if (lottoCount === 3) MESSAGE.result.three += 1;
        if (lottoCount === 4) MESSAGE.result.four += 1;
        if (lottoCount === 5 && !bonusIncluded) MESSAGE.result.five += 1;
        if (lottoCount === 5 && bonusIncluded) MESSAGE.result.fiveBonus += 1;
        if (lottoCount === 6) MESSAGE.result.six += 1;
      });
      return result;
    }
  
    static calculateRate(finalResult, amount) {
      const finalAmount = Object.keys(MESSAGE.money).reduce(
        (acc, key) => acc + MESSAGE.money[key] * finlaResult[key],
        0
      );
      return ((finalAmount / amount) * 100).toFixed(1);
    }
  }
  
  export default Calculate;