const { Random } = require("@woowacourse/mission-utils");
const Lotto = require("../Lotto");

class LottoModel {
  constructor() {
    this.lottos = [];
    this.result = {
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
    };
    this.purchaseAmount = 0;
  }

  generateLottos(purchaseAmount) {
    this.purchaseAmount = purchaseAmount;
    this.lottos = [];
    for (let i = 0; i < purchaseAmount / 1000; i++) {
      const numbers = Random.pickUniqueNumbersInRange(1, 45, 6);
      const lotto = new Lotto(numbers);
      this.lottos.push(lotto);
    }
  }

  calculateResult(winningNumbers, bonusNumber) {
    this.result = {
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
    };

    this.lottos.forEach((lotto) => {
      const matchingNumbers = lotto.getMatchingNumbers(winningNumbers);
      if (matchingNumbers.length === 6) {
        this.result[1]++;
      } else if (matchingNumbers.length === 5 && lotto.contains(bonusNumber)) {
        this.result[2]++;
      } else if (matchingNumbers.length === 5) {
        this.result[3]++;
      } else if (matchingNumbers.length === 4) {
        this.result[4]++;
      } else if (matchingNumbers.length === 3) {
        this.result[5]++;
      }
    });
  }
}

module.exports = LottoModel;
