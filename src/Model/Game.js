import { LOTTO_RANK } from "../constants/constants.js";

class Game {
  constructor(lottos, luckyNumbers, bonusNumber) {
    this.lottos = lottos;
    this.luckyNumbers = luckyNumbers;
    this.bonusNumber = bonusNumber;

    this.matchResult = {
      fifth: 0,
      fourth: 0,
      third: 0,
      second: 0,
      first: 0,
    };
  }

  play() {
    const { lottos, luckyNumbers, bonusNumber } = this;
    lottos.forEach((lotto) => {
      const matchResult = lotto.match(luckyNumbers, bonusNumber);
      this.calculateGame(matchResult);
    });

    return this.matchResult;
  }

  calculateGame(result) {
    const { cnt, bonus } = result;
    // 5등 이하는 제외
    if (cnt < 3) return;
    if (cnt === 5 && bonus) {
      this.matchResult[LOTTO_RANK[cnt][bonus]] += 1;
      return;
    }
    this.matchResult[LOTTO_RANK[cnt]] += 1;
  }
}

export default Game;