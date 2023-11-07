export default class Matching {
  static between(lotto, prize) {
    // lotto ==== Array, prize === Object
    const prizeLine = prize.line;
    const bonusNum = prize.bonus;

    const matchingNums = lotto.get().filter((num) => prizeLine.includes(num));
    const wins = matchingNums.length;
    if (wins === 5 && lotto.get().includes(bonusNum)) {
      return 5.1;
    }
    return wins;
  }
}
