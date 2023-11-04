import { Random } from '@woowacourse/mission-utils';
class Lotto {
  #numbers;

  // numbers는 사용자가 입력한 구입 금액이다.
  constructor(numbers) {
    // this.#validate(numbers);
    this.#numbers = numbers;
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
