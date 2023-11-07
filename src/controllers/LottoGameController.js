import Lotto from '../Lotto.js';
import { PRICE_PER_TICKET } from '../constants/constants.js';

class LottoGameController {
  #lottoGame;
  #validator;
  #inputView;
  #outputView;

  constructor(lottoGame, validator, inputView, outputView) {
    this.#lottoGame = lottoGame;
    this.#validator = validator;
    this.#inputView = inputView;
    this.#outputView = outputView;
  }

  // 로또게임의 전체 흐름을 담당하는 메서드
  async startGame() {
    const amount = await this.#requestValidPurchaseAmount();

    this.#lottoGame.initializeLotto(amount);
    this.#printPurchaseInfo(amount);

    const winningLotto = await this.#requestValidWinningLotto();
    const bonusNumber = await this.#requestValidBonusNumber(winningLotto);
    const winsStatistics = this.#calculateWinsStatistics(winningLotto, bonusNumber);

    this.#printResults(winsStatistics);
  }

  /**
   * 유효한 구입 수량을 요청하고 컨트롤한다.
   * @returns { number } - 구입한 로또 티켓의 수량
   */
  async #requestValidPurchaseAmount() {
    while (true) {
      try {
        const inputPurchaseAmount = await this.#inputView.getPurchaseAmount();
        this.#validator.validatePurchaseAmount(inputPurchaseAmount);

        return inputPurchaseAmount / PRICE_PER_TICKET;
      } catch ({ message }) {
        this.#outputView.printError(message);
      }
    }
  }

  /**
   * 유효한 당첨 번호를 요청하고 컨트롤한다.
   * @returns { Lotto } - 유효한 당첨 로또
   */
  async #requestValidWinningLotto() {
    while (true) {
      try {
        const winningNumbers = await this.#inputView.getWinningNumbers();
        const numbers = winningNumbers.split(',').map(Number);

        return new Lotto(numbers);
      } catch ({ message }) {
        this.#outputView.printError(message);
      }
    }
  }

  /**
   * 유효한 보너스 번호를 요청하고 컨트롤한다.
   * @param { Lotto[number] } winningLotto - 당첨 로또
   * @returns { number } - 유효한 보너스 번호
   */
  async #requestValidBonusNumber(winningLotto) {
    while (true) {
      try {
        const bonusNumber = await this.#inputView.getBonusNumber();
        const isContaining = winningLotto.hasContainBonusNumber(parseInt(bonusNumber, 10));
        this.#validator.validateBonusNumber(bonusNumber, isContaining);

        return parseInt(bonusNumber, 10);
      } catch ({ message }) {
        this.#outputView.printError(message);
      }
    }
  }

  /**
   * 구입한 수량과 구매한 로또목록을 출력한다.
   * @param {number} amount 구매한 장 수
   */
  #printPurchaseInfo(amount) {
    this.#outputView.printPurchaseAmount(amount);
    this.#outputView.printPurchasedLotto(this.#lottoGame.getPurchasedLotto());
  }

  /**
   * 당첨 통계를 계산해서 반환한다.
   * @param {number[]} winningLotto
   * @param {number} bonusNumber
   * @returns { { [PRIZE_KEY] : number } } winsStatistics 당첨된 등수와 카운트
   */
  #calculateWinsStatistics(winningLotto, bonusNumber) {
    const comparisonResults = this.#lottoGame.getComparisonResults(
      winningLotto.getSortedNumbers(),
      bonusNumber
    );

    return this.#lottoGame.getStatistics(comparisonResults);
  }

  /**
   * 계산된 당첨 통계와 총 수익률을 출력한다.
   * @param { { [PRIZE_KEY] : number } } winsStatistics
   */
  #printResults(winsStatistics) {
    this.#outputView.printWinsStatistics(winsStatistics);

    const totalPrizeAmount = this.#lottoGame.getTotalPrizeAmount(winsStatistics);
    const totalProfitRatio = this.#lottoGame.getProfitRatio(totalPrizeAmount);

    this.#outputView.printProfitRatio(totalProfitRatio);
  }
}

export default LottoGameController;
