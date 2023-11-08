import VARIABLE from './Contents/Variable.js';

class Calculate {
  calculateResult(lottoResult) {
    const result = { ...VARIABLE.result };
    lottoResult.forEach(({ lottoCount, bonusIncluded }) => {
      if (lottoCount === 3) {result.three += 1};
      if (lottoCount === 4) {result.four += 1;}
      if (lottoCount === 5 && !bonusIncluded) {result.five += 1;}
      if (lottoCount === 5 && bonusIncluded) {result.fiveBonus += 1;}
      if (lottoCount === 6) {result.six += 1;}
    });
    return result;
  }

  calculateRate(finalResult, amount) {
    const finalAmount = Object.keys(VARIABLE.money).reduce(
      (acc, key) => acc + VARIABLE.money[key] * finalResult[key],
      0
    );
    if (amount === 0) {
      return '0';
    } else {
      const rate = ((finalAmount / amount) * 100).toFixed(1);
      return isNaN(rate) || !isFinite(rate) ? '0' : rate;
    }
  }
}

export default Calculate;