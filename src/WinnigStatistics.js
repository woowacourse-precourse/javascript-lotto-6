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

  compareLottos(buyerLottos) {
    buyerLottos.forEach((buyerLotto) => {
      const lottoNumbers = buyerLotto.getNumbers();
      const [matchCount, matchBonus] = this.countMatchNumber(lottoNumbers);

      this.addCountToResult(matchCount, matchBonus);
    });
  }

  countMatchNumber(lottoNumbers) {
    let matchCount = 0;
    let matchBonus = false;

    lottoNumbers.forEach((number) => {
      if (this.#winningNumbers.includes(number)) matchCount += 1;
    });

    if (matchCount === 5) {
      if (lottoNumbers.includes(this.#bonusNumber)) matchBonus = true;
    }

    return [matchCount, matchBonus];
  }
}

export default WinnigStatistics;
