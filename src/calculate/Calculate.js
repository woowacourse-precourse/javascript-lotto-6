import MESSAGE from "../constant/Message";

class Calculate {
  calculateResult(lottoResult) {
    const result = { ...MESSAGE.result };
    lottoResult.forEach(({ lottoCount, bonusIncluded }) => {
      if (lottoCount === 3) result.three += 1;
      if (lottoCount === 4) result.four += 1;
      if (lottoCount === 5 && !bonusIncluded) result.five += 1;
      if (lottoCount === 5 && bonusIncluded) result.fiveBonus += 1;
      if (lottoCount === 6) result.six += 1;
    });
    return result;
  }
  
    calculateRate(finalResult, amount) {
      const finalAmount = Object.keys(MESSAGE.money).reduce(
        (acc, key) => acc + MESSAGE.money[key] * finalResult[key],
        0
      );
      return (finalAmount / amount * 100).toFixed(1);
    }
  }
  
  export default Calculate;
