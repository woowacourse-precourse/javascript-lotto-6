import {MissionUtils, Console} from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';

/**
 * @typedef {Object} LottoInfo
 * @property {number} rank - 등수
 * @property {number} winningMoney - 당첨 시 상금
 * @property {string} message - 메시지 (등수 및 상금) */

/**
 * @type {LottoInfo[]}
 * @constant */
const LOTTO_RANK = [
  {rank: 1, winningMoney: 2_000_000_000, message: '6개 일치 (2,000,000,000원)'},
  {rank: 2, winningMoney: 30_000_000, message: '5개 일치, 보너스 볼 일치 (30,000,000원)'},
  {rank: 3, winningMoney: 1_500_000, message: '5개 일치 (1,500,000원)'},
  {rank: 4, winningMoney: 50_000, message: '4개 일치 (50,000원)'},
  {rank: 5, winningMoney: 5_000, message: '3개 일치 (5,000원)'},
  {rank: 6, winningMoney: 0, message: '해당 없음'},
];

class App {
  async play() {
    const MONEY = await this.getUserInput(async () => await this.getUserMoney());
    const LOTTOS = this.buyLottos(MONEY);
    const WINNING_NUMBERS = await this.getUserInput(async () => await this.getWinningLotto());
    const BONUS_NUMBER = await this.getUserInput(async () => await this.getBonusNumber(WINNING_NUMBERS));
    this.printResult(LOTTOS, WINNING_NUMBERS, BONUS_NUMBER);
  }

  /**
   * 로또 구입 금액을 입력 받습니다
   * @throws {Error} 입력값이 정수가 아닐 경우, 1000으로 나누어 떨어지지 않을 경우 에러 발생
   * @return {number} */
  async getUserMoney() {
    const USER_STRING = await Console.readLineAsync('구입금액을 입력해 주세요.\n');
    const USER_NUMS = Number(USER_STRING);

    if (isNaN(USER_STRING) || !Number.isInteger(USER_NUMS) || USER_NUMS % 1000 !== 0 || USER_NUMS <= 0) {
      throw new Error('[ERROR] 숫자는 1000의 배수 인 양의 정수만 입력해야 합니다.');
    }

    return USER_NUMS;
  }

  /**
   * 로또를 구입하고, 그 로또를 출력합니다.
   * @param {number} money
   * @return {Lotto[]} */
  buyLottos(money) {
    const LOTTO_COUNT = Math.floor(money / 1000);
    const LOTTOS = [];

    Console.print(`${LOTTO_COUNT}개를 구매했습니다.`);
    for (let i = 0; i < LOTTO_COUNT; i++) {
      const RANDOMS = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
      const LOTTO = new Lotto(RANDOMS);
      Console.print(LOTTO.toString());
      LOTTOS.push(LOTTO);
    }

    return LOTTOS;
  }

  /**
   * 당첨 번호를 입력 받습니다
   * @throws {Error} 입력값이 정수가 아닐 경우, 1~45 범위를 벗어날 경우 에러 발생
   * @return {Lotto} */
  async getWinningLotto() {
    const USER_STRING = await Console.readLineAsync('당첨 번호를 입력해 주세요.\n');
    const USER_NUMS = USER_STRING.split(',').map((num) => Number(num));

    return new Lotto(USER_NUMS);
  }

  /**
   * 유저 입력을 받을 때, 오류 발생 시 메세지를 출력하고 다시 실행
   * @template T
   * @param {function(): Promise<T>} callback
   * @return {Promise<T>} */
  async getUserInput(callback) {
    try {
      return await callback();
    } catch (e) {
      Console.print(e.message);
      return await this.getUserInput(callback);
    }
  }


  /**
   * 보너스 번호를 입력 받습니다
   * @throws {Error} 입력값이 정수가 아닐 경우, 1~45 범위를 벗어날 경우, 당첨 번호와 중복될 경우 에러 발생
   * @param {Lotto} winningLotto
   * @return {number} */
  async getBonusNumber(winningLotto) {
    const USER_STRING = await Console.readLineAsync('보너스 번호를 입력해 주세요.\n');
    const Bonus = Number(USER_STRING);

    if (isNaN(Bonus) || !Number.isInteger(Bonus) || Bonus < 1 || Bonus > 45) {
      throw new Error('[ERROR] 숫자는 1~45 사이의 정수만 입력해야 합니다.');
    }

    if (winningLotto.contains(Bonus)) {
      throw new Error('[ERROR] 보너스 볼은 당첨 번호와 중복될 수 없습니다.');
    }

    return Bonus;
  }

  /**
   * 로또에 대한 당첨 등수를 반환합니다
   * @param {Lotto} lotto
   * @param {Lotto} winningLotto
   * @param {number} bonusNumber
   * @return {LottoInfo} */
  getRank(lotto, winningLotto, bonusNumber) {
    const MATCHED_COUNT = lotto.matchCount(winningLotto);
    const BONUS_MATCHED = lotto.contains(bonusNumber);

    switch (MATCHED_COUNT) {
      case 6:
        return LOTTO_RANK[0];
      case 5:
        return BONUS_MATCHED ? LOTTO_RANK[1] : LOTTO_RANK[2];
      case 4:
        return LOTTO_RANK[3];
      case 3:
        return LOTTO_RANK[4];
      default:
        return LOTTO_RANK[5];
    }
  }

  /**
   * 수익률을 계산합니다
   * @param {number} money
   * @param {LottoInfo[]} ranks
   * @return {number} */
  calculateProfitRate(money, ranks) {
    const TOTAL_WINNING_MONEY = ranks.reduce((acc, rank) => acc + rank.winningMoney, 0);
    return TOTAL_WINNING_MONEY / money * 100;
  }

  /**
   * 로또 당첨 통계와 수익률을 출력하는 함수
   * @param {Lotto[]} lottos
   * @param {Lotto} winningLotto
   * @param {number} bonusNumber */
  printResult(lottos, winningLotto, bonusNumber) {
    const RANKS = lottos.map((lotto) => this.getRank(lotto, winningLotto, bonusNumber));
    const FIXED_LOTTO_RANK = LOTTO_RANK.slice(0, LOTTO_RANK.length - 1).reverse();
    const PROFIT_RATE = this.calculateProfitRate(lottos.length * 1000, RANKS);

    Console.print('당첨 통계\n---');

    FIXED_LOTTO_RANK.forEach((rank) => {
      const MATCHED_COUNT = RANKS.filter((lotto) => lotto.rank === rank.rank).length;
      Console.print(`${rank.message} - ${MATCHED_COUNT}개`);
    });

    Console.print(`총 수익률은 ${PROFIT_RATE.toFixed(1)}%입니다.`);
  }
}

export default App;
