import { Console } from "@woowacourse/mission-utils";

class WinnigStatistics {
  #result = { 3: 0, 4: 0, 5: 0, "5b": 0, 6: 0 };
  #prize = { 3: 5000, 4: 50000, 5: 1500000, "5b": 30000000, 6: 2000000000 };
  #prizeMoney = 0;
  #winningNumbers;
  #bonusNumber;

  constructor(buyerLottos, winnigLotto, bonusNumber) {
    this.#winningNumbers = winnigLotto.getNumbers();
    this.#bonusNumber = bonusNumber;
    this.compareLottos(buyerLottos);
  }
}

export default WinnigStatistics;
