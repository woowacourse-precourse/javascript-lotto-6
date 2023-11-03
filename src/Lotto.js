import { Console, Random } from '@woowacourse/mission-utils';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length === 0) throw new Error('[ERROR] 로또 번호를 입력하세요.');
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
    if (this.checkRange(numbers))
      throw new Error('[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.');
    const numbersSet = this.getNumbersSet(numbers);
    if ([...numbersSet].length !== 6)
      throw new Error('[ERROR] 중복되지 않는 숫자를 입력하세요');
  }

  checkRange(numbers) {
    return numbers.filter(value => 1 > value || value > 45).length;
  }

  getNumbersSet(numbers) {
    return new Set(numbers.map(Number));
  }

  countEqualNumbers(randomNumberArray, userLottoNumber){
    return randomNumberArray.filter(number => userLottoNumber.includes(number)).length;
  }

  compareBonusNumber(randomNumberArray, userBonusNumber){
    return randomNumberArray.includes(userBonusNumber);
  }

  compareLottoNumbers(lottoRandomNumber, userLottoNumber, userBonusNumber){
    const lottoResult = [];
    const bonusResult = 0;
    lottoRandomNumber.forEach(randomNumberArray => {
      const equalNumber = this.countEqualNumbers(randomNumberArray, userLottoNumber);
      if(equalNumber === 5){
        bonusResult = this.compareBonusNumber(randomNumberArray, userBonusNumber);
      }
    });
  }
}

export default Lotto;
