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
      const matchResult = lotto.calculateMatchCount(luckyNumbers, bonusNumber);
      this.calculateGame(matchResult);
    });

    return this.matchResult;
  }

  calculateGame(result) {
    const { cnt, bonus } = result;
    switch (cnt) {
      case 6:
        this.matchResult.first += 1;
        break;
      case 5:
        if (bonus) {
          this.matchResult.second += 1;
          break;
        }
        this.matchResult.third += 1;
        break;
      case 4:
        this.matchResult.fourth += 1;
        break;
      case 3:
        this.matchResult.fifth += 1;
        break;
      default:
        break;
    }
  }
}

export default Game;