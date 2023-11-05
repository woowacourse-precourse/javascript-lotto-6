export default class Comparison {
  static between(lottoAry, prizeObj) {
    const lineAry = prizeObj.line;
    const bonusNum = prizeObj.bonus;

    const luckyNums = lottoAry.show().filter((num) => lineAry.includes(num));
    const wins = luckyNums.length;
    if (wins === 5 && lottoAry.show().includes(bonusNum)) {
      return 5.1;
    }
    return wins;
  }
}
