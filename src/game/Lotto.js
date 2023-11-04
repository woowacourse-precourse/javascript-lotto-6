import { Random } from '@woowacourse/mission-utils';
import { Inputs } from '../ui/Input.js';
import { Outputs } from '../ui/Output.js';
class Lotto {
  #numbers;

  // numbers는 사용자가 입력한 금액이다.
  constructor(numbers, winningNum, bonusNum) {
    // this.#validate(numbers);
    this.#numbers = numbers;
    this.winningNum = winningNum;
    this.bonusNum = bonusNum;
  }

  // #validate(numbers) {
  //   if (numbers.length !== 6) {
  //     throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
  //   }
  // }

  makeLottos() {
    const quantity = this.#numbers / 1000;
    const emptyArrays = Array.from({ length: quantity }, () => {
      return Random.pickUniqueNumbersInRange(1, 45, 6);
    });

    return emptyArrays;
  }

  async isWin() {
    const resultObj = {
      three: 0,
      four: 0,
      five: 0,
      bonus: 0,
      six: 0,
    };
    const lottos = this.makeLottos();
    for (let i = 0; i < lottos.length; i++) {
      let count = 0;
      const currentLotto = lottos[i];
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
    Outputs.printStatistics(resultObj);
  }
  // TODO: 추가 기능 구현
}

export default Lotto;
