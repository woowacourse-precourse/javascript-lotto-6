import { Console } from '@woowacourse/mission-utils';

class Lotto {
  #numbers;

  get numbers() {
    return this.#numbers;
  }

  set numbers(numbers) {
    this.#numbers = numbers;
  }

  constructor(numbers) {
    this.#numbers = this.#validate(numbers);
    this.winCheck = {
      3: 0,
      4: 0,
      5: 0,
      '5+': 0,
      6: 0,
      total: 0,
    };
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }

    const checkNumberSet = new Set(numbers);

    if (numbers.length !== checkNumberSet.size)
      throw new Error('[ERROR] 로또 번호 입력이 잘못되었습니다.');

    this.#numbers = numbers.map(num => {
      if (Number.isNaN(+num) || +num < 1 || +num > 45) {
        throw new Error('[ERROR] 로또 번호 입력이 잘못되었습니다.');
      }

      if (!Number.isInteger(+num)) {
        throw new Error('[ERROR] 로또 번호 입력이 잘못되었습니다.');
      }

      return +num;
    });

    return this.#numbers;
  }

  checkWin(bonusNumber, guessNumber) {
    const bonusGuess = [];

    guessNumber.map(each => {
      const matchNumber = each.filter(num => {
        if (!this.#numbers.includes(+num)) bonusGuess.push(+num);
        return this.#numbers.includes(+num);
      });

      switch (matchNumber.length) {
        case 3:
          this.winCheck[3] += 1;
          this.winCheck.total += 5000;
          break;
        case 4:
          this.winCheck[4] += 1;
          this.winCheck.total += 50000;
          break;
        case 5:
          if (bonusGuess.includes(bonusNumber)) {
            this.winCheck['5+'] += 1;
            this.winCheck.total += 1500000;
          } else {
            this.winCheck[5] += 1;
            this.winCheck.total += 30000000;
          }
          break;
        case 6:
          this.winCheck[6] += 1;
          this.winCheck.total += 2000000000;
          break;

        default:
          break;
      }

      bonusGuess.length = 0;
    });

    Console.print(`\n당첨 통계---\n3개 일치 (5,000원) - ${
      this.winCheck[3]
    }개\n4개 일치 (50,000원) - ${
      this.winCheck[4]
    }개\n5개 일치 (1,500,000원) - ${
      this.winCheck[5]
    }개\n5개 일치, 보너스 볼 일치 (30,000,000원) - ${
      this.winCheck['5+']
    }개\n6개 일치 (2,000,000,000원) - ${this.winCheck[6]}개\n총 수익률은 ${(
      (this.winCheck.total / (guessNumber.length * 1000)) *
      100
    ).toFixed(1)}%입니다.
    `);
  }
}

export default Lotto;
