import { Console } from '@woowacourse/mission-utils';

class LottoMachine {
  #winningNumbers;
  #plusNumber;

  async setWinningNumber() {
    const winnigNumber =
      await Console.readLineAsync('당첨 번호를 입력해 주세요.');
    
    return this.#winningNumbers = winnigNumber;
  }

  async setPlusNumber() {
    const plusNumber =
      await Console.readLineAsync('보너스 번호를 입력해 주세요.');
    
    return this.#plusNumber = plusNumber;
  }

  checkLotto(lottoNumber) {
    const matchedNumbersCount = lottoNumber.filter(item =>
      this.#winningNumbers.includes(item),
    ).length;
    // true는 숫자로 1 false는 0
    const bonusNumberCount = Number(lottoNumber.includes(this.#plusNumber));

    console.log(
      'check Lottonumber fnc:print lotto number check',
      bonusNumberCount,
      matchedNumbersCount,
    );

    // 보너스 번호 없이 6
    if (matchedNumbersCount === 6) return 1;
    // 보너스 포함 6개일때
    else if (matchedNumbersCount + bonusNumberCount === 6) return 2;
    // 보너스 포함 개수 등수 3등부터
    else if (matchedNumbersCount + bonusNumberCount === 5) return 3;
    else if (matchedNumbersCount + bonusNumberCount === 4) return 4;
    else if (matchedNumbersCount + bonusNumberCount === 3) return 5;
    else return 0;
  }
}

export default LottoMachine;
