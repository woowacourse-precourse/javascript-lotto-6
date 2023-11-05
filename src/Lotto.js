import { MissionUtils } from '@woowacourse/mission-utils';

class Lotto {
  #numbers;

  // 질문사항
  constructor(numbers, bonusNumber) {
    this.#validate(numbers);
    this.#bonusNumberValidate(bonusNumber);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    // make input numer array
    const numberStringsArray = numbers.split(',');
    const numbersArray = numberStringsArray.map((number) => Number(number));
    const numbersSet = new Set(numbersArray);

    if (numbersArray.length !== numbersSet.size) {
      throw new Error('[ERROR] 로또 번호에서 중복된 숫자를 입력하지 마세요.');
    }
    if (numbersArray.length !== 6) {
      console.log('lengthproblem');
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
    numbersArray.forEach((number) => {
      if (number < 0 || number > 45 || Number.isInteger(number) === false) {
        console.log(number);
        console.log('problem');
        throw new Error('[ERROR] 로또 번호는 0 이상 정수여야합니다.');
      }
    });
  }

  #bonusNumberValidate(bonusNumber) {
    if (bonusNumber.length !== 1) {
      throw new Error('[ERROR] 보너스 번호는 한자리만 입력하세요.');
    }
    if (bonusNumber < 0 || Number.isInteger(Number(bonusNumber)) === false) {
      throw new Error('[ERROR] 로또 번호는 0 이상 정수여야합니다.');
    }
  }
}

export default Lotto;
