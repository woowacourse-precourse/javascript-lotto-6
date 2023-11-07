import { Console } from '@woowacourse/mission-utils';
import { MIN_NUMBER, MAX_NUMBER, COUNT_NUMBER, WINNING_STATISTICS, WINNING_INFOS, REWARD, winCheck, ERRORS } from './constants.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#numbers = this.#validate(numbers);
  }

  #validate(numbers) {
    if (numbers.length !== COUNT_NUMBER)
      throw new Error(ERRORS.invalidWinningNumbersCount);

    if (new Set(numbers).size !== COUNT_NUMBER)
      throw new Error(ERRORS.invalidDuplicateLottoNumbers);

    const num = numbers.map((num) => {
      if (!Number.isInteger(+num) || Number.isNaN(+num))
        throw new Error(ERRORS.invalidNaN);

      if (+num < MIN_NUMBER || +num > MAX_NUMBER)
        throw new Error(ERRORS.invalidRange);
      return +num;
    })

    return num;
  }

  win(bonus, lotto) {
    lotto.forEach(num => {
      const match = num.filter(num =>
        this.#numbers.includes(+num)
      );

      if (match.length === 5) {
        this.#bonusMatch(bonus, num);
        return;
      }

      this.checkMatch(match);
    });
    this.#printResult(lotto);
  }

  checkMatch(match) {
    switch (match.length) {
      case 3:
        this.#WinCountUpdate(3, REWARD.fifth);
        break;
      case 4:
        this.#WinCountUpdate(4, REWARD.fourth);
        break;
      case 6:
        this.#WinCountUpdate(6, REWARD.first);
        break;
      default:
        break;
    }
  }

  #bonusMatch(bonus, num) {
    if (num.includes(+bonus)) {
      this.#WinCountUpdate('5+1', REWARD.second);
      return;
    }
    this.#WinCountUpdate(5, REWARD.third);
  }

  // TODO: 추가 기능 구현
  #WinCountUpdate(count, prize) {
    winCheck[count] += 1;
    winCheck.total += prize;
  }

  #printResult(lotto) {
    Console.print(`\n${WINNING_STATISTICS}\n---\n${WINNING_INFOS[3]}${
      winCheck[3]
    }개\n${WINNING_INFOS[4]}${
      winCheck[4]
    }개\n${WINNING_INFOS[5]}${
      winCheck[5]
    }개\n${WINNING_INFOS['5+1']}${
      winCheck['5+1']
    }개\n${WINNING_INFOS[6]}${winCheck[6]}개\n총 수익률은 ${(
      (winCheck.total / (lotto.length * 1000)) *
      100
    ).toFixed(1)}%입니다.
    `);
  }
}

export default Lotto;
