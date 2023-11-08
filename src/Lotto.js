import { MissionUtils } from "@woowacourse/mission-utils";
import { LOTTO_MESSAGE, ERROR_MESSAGE, PRIZE_ARR } from "./Messages.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    if (numbers.length > 0) {
      this.#validate(numbers);
    }
    this.#numbers = numbers;
    
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(ERROR_MESSAGE.INVALID_LOTTO_NUMBER_COUNT);
    }
    if (new Set(numbers).size !== numbers.length) {
      throw new Error(ERROR_MESSAGE.DUPLICATE_LOTTO_NUMBERS);
    }
    if (!numbers.every(num => !Number.isNaN(Number(num)) && num >= 1 && num <= 45)) {
      throw new Error(ERROR_MESSAGE.INVALID_LOTTO_NUMBER_RANGE);
    }
  }

  generateRandomNumber(lottoCnt) {
    const lottoArr = [];
    for(let i = 0 ; i < lottoCnt ; i++) {
      const randomNumbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
      const formattedNumbers = JSON.stringify(randomNumbers).replace('[', '').replace(']', '').replace(/,/g, ', ');
      MissionUtils.Console.print(`[${formattedNumbers}]`);
      lottoArr.push(randomNumbers);
    }
    return lottoArr;
  }
  repeatLottoNumber(purchasePrice) {
    if (Number.isNaN(Number(purchasePrice))) {
      throw new Error(ERROR_MESSAGE.NOT_ONLY_NUMBER);
    }
    if (purchasePrice % 1000 !== 0) {
      throw new Error(ERROR_MESSAGE.INVALID_PURCHASE_AMOUNT);
    }
    const lottoCnt = purchasePrice / 1000;
    return lottoCnt;
  }
  isValidWinningNumbers(winningNumbers) {
    this.#validate(winningNumbers.split(','));
  }
  checkWinningNumbers(lottoArr, winningNumbers, bonusNumber) {
    if (Number.isNaN(Number(bonusNumber)) || bonusNumber < 1 || bonusNumber > 45) {
      throw new Error(ERROR_MESSAGE.INVALID_BONUS_NUMBER_RANGE);
    }
    
    const winningCnt = [0, 0, 0, 0, 0];
  
    for(let i = 0 ; i < lottoArr.length ; i++) {
      const matchedNumbers = lottoArr[i].filter(number => winningNumbers.includes(number));
      const matchedCount = matchedNumbers.length;
  
      switch (matchedCount) {
        case 6:
          winningCnt[4] += 1;
          break;
        case 5:
          if (lottoArr[i].includes(bonusNumber)) {
            winningCnt[3] += 1;
          } else {
            winningCnt[2] += 1;
          }
          break;
        case 4:
          winningCnt[1] += 1;
          break;
        case 3:
          winningCnt[0] += 1;
          break;
      }
    }
    return winningCnt;
  }
  returnWinningDetails(winningCnt) {
    let totalPrizeMoney = 0;
  
    for(let i = 0 ; i < winningCnt.length ; i++) {
      MissionUtils.Console.print(`${PRIZE_ARR.PRIZE_DESCRIPTIONS[i]} - ${winningCnt[i]}개`);
      totalPrizeMoney += PRIZE_ARR.PRIZE_MONEY_ARR[i] * winningCnt[i];
    }
    return totalPrizeMoney;
  }
  returnRevenuePercent(purchasePrice, totalPrizeMoney) {
    const revenuePercentage = (totalPrizeMoney / purchasePrice * 100).toFixed(1);
    return MissionUtils.Console.print(`${LOTTO_MESSAGE.TOTAL_REVENUE_MESSAGE} ${revenuePercentage}${LOTTO_MESSAGE.PERCENT_MESSAGE}`);
  }
  
}

export default Lotto;
