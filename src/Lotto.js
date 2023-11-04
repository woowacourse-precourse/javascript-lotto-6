import { MissionUtils } from "@woowacourse/mission-utils";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  generateRandomNumber(lottoCnt) {
    const lottoArr = [];
    for(let i = 0 ; i < lottoCnt ; i++) {
      const randomNumbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
      MissionUtils.Console.print(randomNumbers);
      lottoArr.push(randomNumbers);
    }
    return lottoArr;
  }
  repeatLottoNumber(purchasePrice) {
    const lottoCnt = purchasePrice / 1000;
    return lottoCnt;
  }
  isValidWinningNumbers(winningNumbers) {
    this.#validate(winningNumbers.split(','));
  } 
}

export default Lotto;
