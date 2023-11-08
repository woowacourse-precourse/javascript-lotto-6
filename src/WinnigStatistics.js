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

  addCountToResult(matchCount, matchBouns) {
    if (matchCount < 3) return;

    if (matchBouns) {
      this.#result["5b"] += 1;
      this.#prizeMoney += this.#prize["5b"];
    } else {
      this.#result[matchCount] += 1;
      this.#prizeMoney += this.#prize[matchCount];
    }
  }

  printResult() {
    Console.print("\n당첨 통계");
    Console.print("---");

    const resultArray = this.getResult();
    resultArray.forEach((eachResult) => {
      Console.print(eachResult);
    });
  }

  getResult() {
    const result = Object.entries(this.#result);

    const resultArray = [];
    for (const [matchNumber, count] of result) {
      const prizeMoney = this.#prize[matchNumber];
      const thousandSeparator = prizeMoney.toLocaleString();

      if (matchNumber === "5b") {
        resultArray.push(
          `5개 일치, 보너스 볼 일치 (${thousandSeparator}원) - ${count}개`
        );
      } else {
        resultArray.push(
          `${matchNumber}개 일치 (${thousandSeparator}원) - ${count}개`
        );
      }
    }

    return resultArray.sort();
  }

  calculrateMargin(purchaseMoney) {
    const profitPercentage = (this.#prizeMoney / purchaseMoney) * 100;

    this.printMargin(profitPercentage.toFixed(1));
  }

  printMargin(profitPercentage) {
    Console.print(`총 수익률은 ${profitPercentage}%입니다.`);
  }
}

export default WinnigStatistics;
