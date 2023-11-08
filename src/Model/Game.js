import { LOTTO, LOTTO_RANK, RANK } from "../constants/constants.js";

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
      this.calculateResult(matchResult);
    });

    return this.matchResult;
  }

  calculateResult(result) {
    const { cnt, bonus } = result;
    // 5등 미만이라면 return
    const rank = this.calculateRank(cnt, bonus);
    if (!rank) return;
    // 2등이라면 보너스 번호 일치 여부에 따라 결과를 계산
    if (rank === RANK.second) {
      this.matchResult[LOTTO_RANK[cnt][bonus]] += 1;
      return;
    }
    this.matchResult[LOTTO_RANK[cnt]] += 1;
  }

  calculateRank(cnt, bonus = false) {
    if (cnt === LOTTO.possibleSecondRank) {
      return LOTTO_RANK[cnt][bonus];
    }
    
    return LOTTO_RANK[cnt];
  }
}

export default Game;