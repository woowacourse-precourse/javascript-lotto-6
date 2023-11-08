import OPTIONS from "./constant/option";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    this.isInputNotComma(numbers);
    this.isThereOverlapNumber(numbers);
    this.isSixthDigits(numbers);
    this.isFromOneToFortyFive(numbers);
    this.isNotNumber(numbers);
  }

  // TODO: 추가 기능 구현
  isInputNotComma(numbers) {
    if (!numbers.includes(',')) {
      throw new Error("[ERROR] (,)로 구분하여 숫자를 입력해주세요.");
    }
  }

  isThereOverlapNumber(numbers) {
    const numberSplit = numbers.split(',');
    if (new Set(numberSplit).size !== numberSplit.length) {
      throw new Error("[ERROR] (,)로 구분하여 중복되지 않는 숫자를 입력해주세요.");
    }
  }

  isSixthDigits(numbers) {
    const commaLength = numbers.split(',').length - 1;
    if (commaLength !== 5) {
      throw new Error("[ERROR] (,)로 구분하여 6자리 숫자를 입력해주세요. (예. 1,2,3,4,5,6)");
    }
  }

  isFromOneToFortyFive(numbers) {
    numbers.split(',').map((num) => {
      if (Number(num) > OPTIONS.maxRandomNumber || Number(num) < OPTIONS.minRandomNumber) {
        throw new Error('[ERROR] 숫자 1부터 45까지 입력해주세요.');
      }
    })
  }

  isNotNumber(numbers) {
    numbers.split(',').map((num) => {
      if (isNaN(num)) {
        throw new Error('[ERROR] 숫자만 입력해주세요.');
      }
    });
  }

  getNumber() {
    return this.#numbers;
  }
}

export default Lotto;
