import { Console } from '@woowacourse/mission-utils';

const RANK = ['lose', 'first', 'second', 'third', 'fourth', 'fifth'];
const WINNING_REWARDS = [
  '3개 일치 (5,000원)',
  '4개 일치 (50,000원)',
  '5개 일치 (1,500,000원)',
  '5개 일치, 보너스 볼 일치 (30,000,000원)',
  '6개 일치 (2,000,000,000원)',
];

class Lotto {
  #numbers;
  #bonus_number;
  #result;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
    this.#result = {
      first: 0,
      second: 0,
      third: 0,
      fourth: 0,
      fifth: 0,
    };
  }

  #validate(numbers) {
    const set = new Set(numbers);
    if (set.size !== numbers.length) {
      throw new Error('[ERROR] 로또 번호는 서로 달라야 합니다.');
    }
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
  }

  setBonusNumber(number) {
    this.#bonus_number = number;
  }

  getResult(user_lotto_list) {
    user_lotto_list.forEach((user_lotto) => {
      const rank = this.getRank(user_lotto);
      if (rank !== RANK[0]) this.#result[rank] += 1;
    });
  }

  showResult(user_lotto_list) {
    this.getResult(user_lotto_list);
    const rank_reverse = RANK.reverse();
    const result_form = WINNING_REWARDS.map((rule, idx) => {
      return `${rule} - ${this.#result[rank_reverse[idx]]}개 \n`;
    }).join('');
    Console.print(result_form);
  }

  getRank(numbers) {
    const correct_number_count = this.getCorrectNumberCount(numbers);
    switch (correct_number_count) {
      case 3:
        return RANK[5];
      case 4:
        return RANK[4];
      case 5:
        return RANK[3];
      case 5.5:
        return RANK[2];
      case 6:
        return RANK[1];
      default:
        return RANK[0];
    }
  }

  getCorrectNumberCount(numbers) {
    const winning_number = this.#numbers;
    const user_lotto_number = [...numbers];

    let correct_number_count = 0;
    let i = 0;
    let j = 0;

    const bonus_number_idx = user_lotto_number.indexOf(this.#bonus_number);
    if (bonus_number_idx !== -1) {
      correct_number_count += 0.5;
      user_lotto_number.splice(bonus_number_idx, 1);
    }

    while (i < 6 && j < user_lotto_number.length) {
      if (winning_number[i] === user_lotto_number[j]) {
        correct_number_count += 1;
        i += 1;
        j += 1;
        continue;
      }

      if (winning_number[i] > user_lotto_number[j]) {
        j += 1;
        continue;
      }

      if (winning_number[i] < user_lotto_number[j]) {
        i += 1;
        continue;
      }
    }

    return correct_number_count;
  }
}

export default Lotto;
