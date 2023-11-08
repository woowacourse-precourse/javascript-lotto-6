import {Console} from '@woowacourse/mission-utils';

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
  }

  /**
   * 로또를 구입하고, 그 로또를 출력합니다.
   * @param {number} money
   * @return {Lotto[]} */
  buyLottos(money) {
  }

  /**
   * 당첨 번호를 입력 받습니다
   * @throws {Error} 입력값이 정수가 아닐 경우, 1~45 범위를 벗어날 경우 에러 발생
   * @return {Lotto} */
  async getWinningLotto() {
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
  }

  /**
   * 로또에 대한 당첨 등수를 반환합니다
   * @param {Lotto} lotto
   * @param {Lotto} winningLotto
   * @param {number} bonusNumber
   * @return {LottoInfo} */
  getRank(lotto, winningLotto, bonusNumber) {
  }

  /**
   * 수익률을 계산합니다
   * @param {number} money
   * @param {LottoInfo[]} ranks
   * @return {number} */
  calculateProfitRate(money, ranks) {
  }

  /**
   * 로또 당첨 통계와 수익률을 출력하는 함수
   * @param {Lotto[]} lottos
   * @param {Lotto} winningLotto
   * @param {number} bonusNumber */
  printResult(lottos, winningLotto, bonusNumber) {
  }
}

export default App;
