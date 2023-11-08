import Output from './view/Output.js';
import * as NUMBER from './constant/Number.js';

class Statistics {
  #winnigNumbers;
  #bonusNumber;

  constructor(winningNumbers, bonusNumber) {
    this.#winnigNumbers = winningNumbers;
    this.#bonusNumber = bonusNumber;
  }

  async calculate(lottoList) {
    let len = 0;
    const resultMap = new Map();
    resultMap.set(3, 0);
    resultMap.set(4, 0);
    resultMap.set(5, 0);
    resultMap.set(6, 0); // 5개일치, 보너스 볼 일치
    resultMap.set(7, 0); // 6개일치

    lottoList.forEach((lotto) => {
      len = lotto.filter((num) =>
        this.#winnigNumbers.includes(Number(num))
      ).length;

      if (len === 5) {
        if (lotto.filter((num) => this.#bonusNumber.includes(Number(num))))
          len = 6;
      }

      if (len === 6) len = 7;

      if (resultMap.get(len)) {
        resultMap.set(len, resultMap.get(len) + 1);
      } else {
        resultMap.set(len, 1);
      }
    });

    this.result(resultMap, lottoList);
  }
  result(resultMap, lottoList) {
    Output.printWinnerStatistics(resultMap);
    this.totalReturn(resultMap, lottoList);
  }
  totalReturn(resultMap, lottoList) {
    let winnerPrice = 0;
    const price = [0, 0, 5000, 50000, 1500000, 2000000000, 30000000];
    resultMap.forEach((totalCnt, sameNum) => {
      if (totalCnt > 0 && sameNum > 2) {
        winnerPrice += price[sameNum - 1] * totalCnt;
      }
    });
    const purchasePrice = lottoList.length * NUMBER.LOTTO_PRICE;
    const totalReturn = ((winnerPrice / purchasePrice) * 100).toFixed(1);
    Output.printTotalReturn(totalReturn);
  }
}

export default Statistics;
