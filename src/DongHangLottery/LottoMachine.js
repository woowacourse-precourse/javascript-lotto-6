import { Console } from '@woowacourse/mission-utils';
import Validator from './Validator.js';

class LottoMachine {
  #winningNumbers;
  #plusNumber;

  constructor() {
    this.Validator = new Validator();
  }

  async setWinningNumber() {
    const userInput = await Console.readLineAsync('당첨 번호를 입력해 주세요.');
    const winnigNumber = userInput.split(',').map(Number);
    if (this.Validator.isValidWinningNumbers(winnigNumber))
      this.#winningNumbers = winnigNumber;
  }

  async setPlusNumber() {
    const plusNumber =
      await Console.readLineAsync('보너스 번호를 입력해 주세요.');
    if (this.Validator.isValidBonusNumbers(this.#winningNumbers, plusNumber))
      this.#plusNumber = plusNumber;
  }

  checkLottoResult(lottoList) {
    //   const matchedNumbersCount = lottoNumber.filter(item =>
    //     this.#winningNumbers.includes(item),
    //   ).length;
    //   // true는 숫자로 1 false는 0
    //   const bonusNumberCount = Number(lottoNumber.includes(this.#plusNumber));

    //   // console.log(
    //   //   'check Lottonumber fnc:print lotto number check',
    //   //   bonusNumberCount,
    //   //   matchedNumbersCount,
    //   // );

    //   // 보너스 번호 없이 6
    //   if (matchedNumbersCount === 6) return 1;
    //   // 보너스 포함 6개일때
    //   else if (matchedNumbersCount + bonusNumberCount === 6) return 2;
    //   // 보너스 포함 개수 등수 3등부터
    //   else if (matchedNumbersCount + bonusNumberCount === 5) return 3;
    //   else if (matchedNumbersCount + bonusNumberCount === 4) return 4;
    //   else if (matchedNumbersCount + bonusNumberCount === 3) return 5;
    //   else return 0;
    // }

    const winningDetails = {
      FIRST: 0,
      SECOND: 0,
      THIRD: 0,
      FOURTH: 0,
      FIFTH: 0,
    };

    lottoList.forEach(lottoObj => {
      const lotto = lottoObj.getLottoNumber();
      const matchedNumbersCount = lotto.filter(item =>
        this.#winningNumbers.includes(item),
      ).length;
      // true는 숫자로 1 false는 0
      const bonusNumberCount = Number(lotto.includes(this.#plusNumber));

      // console.log(
      //   'check lotto fnc:print lotto number check',
      //   bonusNumberCount,
      //   matchedNumbersCount,
      // );

      // 보너스 번호 없이 6
      if (matchedNumbersCount === 6) winningDetails.FIRST += 1;
      // 보너스 포함 6개일때
      else if (matchedNumbersCount + bonusNumberCount === 6)
        winningDetails.SECOND += 1;
      // 보너스 포함 개수 등수 3등부터
      else if (matchedNumbersCount + bonusNumberCount === 5)
        winningDetails.THIRD += 1;
      else if (matchedNumbersCount + bonusNumberCount === 4)
        winningDetails.FOURTH += 1;
      else if (matchedNumbersCount + bonusNumberCount === 3)
        winningDetails.FIFTH += 1;
      else return 0;
    });
    return  winningDetails;
  }

}

export default LottoMachine;
