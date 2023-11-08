import { Console, MissionUtils } from '@woowacourse/mission-utils';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  // eslint-disable-next-line class-methods-use-this
  #validate(numbers) {
    const SET_NUMBERS = new Set(numbers);
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
    if (SET_NUMBERS.size !== numbers.length) {
      throw new Error('[ERROR] 중복되는 숫자가 존재합니다.');
    }
    for (let i = 0; i < numbers.length; i += 1) {
      if (numbers[i] > 45 || numbers[i] < 0) {
        throw new Error('[ERROR] 로또 숫자 범위는 1~45 까지 입니다.');
      }
    }
  }

  async getBonusNumber(lottoNumber) {
    const INPUT = await MissionUtils.Console.readLineAsync('\n보너스 번호를 입력해 주세요.\n');
    this.validateBonusNumber(INPUT);
    this.validateBonusDuplicate(INPUT, lottoNumber);
    return Number(INPUT);
  }

  // eslint-disable-next-line class-methods-use-this
  validateBonusNumber(bonus) {
    if (!(Number.isInteger(Number(bonus)))) {
      throw new Error('[ERROR] 보너스 번호는 정수이어야합니다.');
    }
  }

  // eslint-disable-next-line class-methods-use-this
  validateBonusDuplicate(bonus, lottoNumber) {
    if (bonus in lottoNumber) {
      throw new Error('[ERROR] 보너스 번호가 이미 로또 번호에 존재합니다.');
    }
  }

  getLottoResult(tickets, numbers, bonus) {
    let lottoResult = [0, 0, 0, 0, 0];
    let sameNumArray;

    for (let i = 0; i < tickets.length; i += 1) {
      sameNumArray = numbers.filter((num) => tickets[i].includes(num));
      lottoResult = this.findLottoRank(lottoResult, sameNumArray.length, bonus, tickets[i]);
    }
    return lottoResult;
  }

  // eslint-disable-next-line max-lines-per-function
  findLottoRank(resultArray, sameNumCnt, bonus, tickets) {
    let rankResultArray = resultArray;
    if (sameNumCnt === 6) {
      rankResultArray[4] += 1;
    }
    if (sameNumCnt === 5) {
      rankResultArray = this.checkSecondRank(rankResultArray, sameNumCnt, bonus, tickets);
    }
    if (sameNumCnt === 4) {
      rankResultArray[1] += 1;
    }
    if (sameNumCnt === 3) {
      rankResultArray[0] += 1;
    }
    return rankResultArray;
  }

  // eslint-disable-next-line class-methods-use-this
  checkSecondRank(resultArray, sameNumCnt, bonus, tickets) {
    const rankResultArray = resultArray;
    if (tickets.includes(bonus)) {
      rankResultArray[3] += 1;
      return rankResultArray;
    }
    rankResultArray[2] += 1;
    return rankResultArray;
  }
}

export default Lotto;
