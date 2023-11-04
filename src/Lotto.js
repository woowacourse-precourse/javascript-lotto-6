import { Console } from "@woowacourse/mission-utils";


class Lotto {
  _numbers;

  constructor(numbers) {
    this._validate(numbers);
    this._numbers = numbers;
  }
  
  _validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  sortNumbers() {
    this._numbers.sort(function(a, b) {
      if (a > b) return 1;
      if (a < b) return -1;
    });
  }

  printNumbers() {
    const numberString = this._numbers.join(', ');
    Console.print(`[${numberString}]`); 
  }
}

export default Lotto;
