import { Random, Console } from '@woowacourse/mission-utils';
import { Outputs } from '../ui/Output.js';

class Lotto {
  #numbers;

  // numbers는 사용자가 입력한 구입 금액이다.
  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    const checkStyle = /\D/;
    Console.print(numbers);
    if (checkStyle.test(numbers)) {
      Console.print('[ERROR] 정수만 입력되어야 합니다.');
    }
    if (numbers % 1000 !== 0) {
      Console.print('[ERROR] 구매 단위가 1000원으로 떨어져야 합니다.');
    }
  }

  async makeLottos() {
    Console.print(`${this.#numbers / 1000}개를 구매했습니다.`);
    const quantity = this.#numbers / 1000;
    const emptyArrays = Array.from({ length: quantity }, () => {
      const lottosNumber = Random.pickUniqueNumbersInRange(1, 45, 6);
      Console.print(`[${lottosNumber.join(', ')}]`);
      return lottosNumber;
    });
    Console.print('');
    return emptyArrays;
  }

  // TODO: 추가 기능 구현
}

class LottoResult extends Lotto {
  constructor(numbers, winningNum, bonusNum, myLottos) {
    super(numbers);
    this.winningNum = winningNum;
    this.bonusNum = bonusNum;
    this.myLottos = myLottos;
  }

  async isFit() {
    const resultObj = {
      three: 0,
      four: 0,
      five: 0,
      bonus: 0,
      six: 0,
    };
    for (let i = 0; i < this.myLottos.length; i++) {
      let count = 0;
      const currentLotto = this.myLottos[i];
      for (let j = 0; j < currentLotto.length; j++) {
        if (this.winningNum.includes(currentLotto[j])) {
          count += 1;
        }
      }
      switch (count) {
        case 3:
          resultObj.three += 1;
          break;
        case 4:
          resultObj.four += 1;
          break;
        case 5:
          if (currentLotto.includes(this.bonusNum)) {
            resultObj.bonus += 1;
            break;
          }
          resultObj.five += 1;
          break;
        case 6:
          resultObj.six += 6;
      }
    }
    return resultObj;
  }
}

export default { Lotto, LottoResult };
