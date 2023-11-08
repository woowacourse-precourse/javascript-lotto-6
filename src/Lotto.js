import { MissionUtils } from "@woowacourse/mission-utils";

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
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
    if (new Set(numbers).size !== numbers.length) {
      throw new Error("[ERROR] 중복된 숫자가 있습니다.");
    }
    if (!numbers.every(num => !Number.isNaN(Number(num)) && num >= 1 && num <= 45)) {
      throw new Error('[ERROR] 로또 번호는 1부터 45의 숫자만 사용하실 수 있습니다.');
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
      throw new Error("[ERROR] 숫자만 입력 가능합니다.");
    }
    if (purchasePrice % 1000 !== 0) {
      throw new Error("[ERROR] 구입금액은 반드시 1000원 단위이여야 합니다.");
    }
    const lottoCnt = purchasePrice / 1000;
    return lottoCnt;
  }
  isValidWinningNumbers(winningNumbers) {
    this.#validate(winningNumbers.split(','));
  }
  checkWinningNumbers(lottoArr, winningNumbers, bonusNumber) {
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
    const prizeDescriptions = [
      "3개 일치 (5,000원)",
      "4개 일치 (50,000원)",
      "5개 일치 (1,500,000원)",
      "5개 일치, 보너스 볼 일치 (30,000,000원)",
      "6개 일치 (2,000,000,000원)",
    ];

    const prizeMoneyArr = [
      5000, 50000, 1500000, 30000000, 2000000000
    ]

    let totalPrizeMoney = 0;
  
    for(let i = 0 ; i < winningCnt.length ; i++) {
      MissionUtils.Console.print(`${prizeDescriptions[i]} - ${winningCnt[i]}개`);
      totalPrizeMoney += prizeMoneyArr[i] * winningCnt[i];
    }
    return totalPrizeMoney;
  }
  returnRevenuePercent(purchasePrice, totalPrizeMoney) {
    return MissionUtils.Console.print(`총 수익률은 ${totalPrizeMoney / purchasePrice * 100}%입니다.`);
  }
  
}

export default Lotto;
