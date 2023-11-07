export default class Matching {
  static between(lottoAry, prizeObj) {
    const lineAry = prizeObj.line;
    const bonusNum = prizeObj.bonus;

    const luckyNums = lottoAry.get().filter((num) => lineAry.includes(num));
    const wins = luckyNums.length;
    if (wins === 5 && lottoAry.get().includes(bonusNum)) {
      return 5.1;
    }
    return wins;
  }
}
