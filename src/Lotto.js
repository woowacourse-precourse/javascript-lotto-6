import { MissionUtils } from '@woowacourse/mission-utils';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
    this.printNumbers();
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
  }
  printNumbers() {
    MissionUtils.Console.print(this.#numbers);
  }
  compareWinNumbers(winNumber) {
    let winCount=0;
    winNumber.forEach((num) => {
      if (this.#numbers.includes(Number(num))) {
        winCount += 1;
      }
    });
    return winCount;
  }
  

  // TODO: 추가 기능 구현
}

export default Lotto;
