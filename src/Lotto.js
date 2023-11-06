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

    this.prize = Object.freeze({
      FIRST_PRIZE: 2000000000,
      SECOND_PRIZE: 30000000,
      THIRD_PRIZE: 1500000,
      FOURTH_PRIZE: 50000,
      FIFTH_PRIZE: 5000,
    });
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.\n');
    }

    const checkNumberSet = new Set(numbers);
    if (numbers.length !== checkNumberSet.size)
      throw new Error('[ERROR] 로또 번호 입력이 잘못되었습니다.\n');

    this.validateNumberCheck(numbers);

    return this.#numbers;
  }

  validateNumberCheck(numbers) {
    this.#numbers = numbers.map(num => {
      if (Number.isNaN(+num) || +num < 1 || +num > 45) {
        throw new Error('[ERROR] 로또 번호 입력이 잘못되었습니다.\n');
      }

      if (!Number.isInteger(+num)) {
        throw new Error('[ERROR] 로또 번호 입력이 잘못되었습니다.\n');
      }

      return +num;
    });
  }

  checkWin(bonusNumber, guessNumber) {
    guessNumber.forEach(each => {
      const matchNumber = each.filter(num => this.#numbers.includes(+num));

      switch (matchNumber.length) {
        case 3:
          this.winCheck[3] += 1;
          this.winCheck.total += this.prize.FIFTH_PRIZE;
          break;
        case 4:
          this.winCheck[4] += 1;
          this.winCheck.total += this.prize.FOURTH_PRIZE;
          break;
        case 5:
          if (this.#numbers.includes(+bonusNumber)) {
            this.winCheck['5+'] += 1;
            this.winCheck.total += this.prize.SECOND_PRIZE;
          } else {
            this.winCheck[5] += 1;
            this.winCheck.total += this.prize.THIRD_PRIZE;
          }
          break;
        case 6:
          this.winCheck[6] += 1;
          this.winCheck.total += this.prize.FIRST_PRIZE;
          break;

        default:
          break;
      }
    });
    this.resultPrint(guessNumber);
  }

  resultPrint(guessNumber) {
    Console.print(`\n당첨 통계\n---\n3개 일치 (5,000원) - ${
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
