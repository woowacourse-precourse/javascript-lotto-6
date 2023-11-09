import { Console, Random } from '@woowacourse/mission-utils';
import InputView from '../view/InputView.js';
import LottoPlayer from '../model/LottoPlayer.js';
import Lotto from '../Lotto.js';
import OutputView from '../view/OutputView.js';
import { LOTTO_MACHINE_RULES, LOTTO_RULES, NUMERIC_PATTERN } from '../constants/Rules.js';
import { ERROR_MESSAGE } from '../constants/Messages.js';
import WinningNumbers from '../model/WinningNumbers.js';

export default class LottoMachine {
  #player;

  #winningNumbers;

  #INFINITE;

  constructor() {
    this.#INFINITE = true;
  }

  /**
   * 로또 게임을 시작하는 메서드
   */
  async run() {
    this.#player = new LottoPlayer(await this.#getPurchaseAmount());
    this.#makeLottoNumbers(this.#player.getPurchaseAmount());
    OutputView.printLottoTickets(this.#player.getLottoTickets());
    this.#winningNumbers = await this.#getWinningNumbers();
    await this.#getBonusNumber();
    this.#findMatchCount();
    this.#calculateWinningStats();
    this.#printProfit();
  }

  /**
   * 하나의 로또 번호를 생성하여 반환하는 메서드
   * @returns {Lotto} [로또 번호]
   */
  #makeOneLotto() {
    const pickRandomUniqueNumbers = Random.pickUniqueNumbersInRange(
      LOTTO_RULES.minNumber,
      LOTTO_RULES.maxNumber,
      LOTTO_RULES.pickCount,
    );

    const sortNumbers = this.#getAscendingOrderedNumbers(pickRandomUniqueNumbers);

    return new Lotto(sortNumbers);
  }

  /**
   * 숫자 배열을 오름차순 정렬하여 반환하는 메서드
   * @param {number[]} numbers
   * @returns {number[]} [오름차순 정렬된 숫자 배열]
   */
  #getAscendingOrderedNumbers(numbers) {
    return numbers.sort((number1, number2) => number1 - number2);
  }

  /**
   * 구입 금액에 맞는 로또를 발행하는 메서드
   * @param {number} purchaseAmount
   */
  #makeLottoNumbers(purchaseAmount) {
    const lottoTicketCount = purchaseAmount / LOTTO_MACHINE_RULES.inputUnit;

    for (let i = 1; i <= lottoTicketCount; i += 1) {
      this.#player.setLottoTickets(this.#makeOneLotto());
    }

    OutputView.printNewLine();
  }

  /**
   * 로또 구매 금액을 입력 받은 후 입력 값을 숫자형태로 반환합니다.
   * @returns {number} [구매 금액]
   */
  async #getPurchaseAmount() {
    while (this.#INFINITE) {
      try {
        const purchaseAmountInput = await InputView.readPurchaseAmount();
        const parsePurchaseAmount = this.#numberParser(purchaseAmountInput);

        this.#purchaseAmountValidate(parsePurchaseAmount);

        return parsePurchaseAmount;
      } catch (e) {
        Console.print(e.message);
      }
    }
  }

  /**
   * 문자열을 숫자로 변환한 후 반환합니다.
   * @param {string} input
   * @returns {number} [문자열을 숫자로 변환한 값]
   */
  #numberParser(input) {
    return Number(input);
  }

  /**
   * 로또 구입 금액 입력에 대한 유효성을 검증합니다.
   * @param {number} purchaseAmount
   */
  #purchaseAmountValidate(purchaseAmount) {
    this.#numericOnlyValidate(purchaseAmount);
    this.#purchaseAmountUnitValidate(purchaseAmount);
  }

  /**
   * 입력한 값이 숫자 값인지 검증합니다.
   * 숫자가 아닐 시 에러를 발생시킵니다.
   * @param {number} input ;
   */
  #numericOnlyValidate(input) {
    if (!NUMERIC_PATTERN.test(input)) {
      throw new Error(ERROR_MESSAGE.numericOnly);
    }
  }

  /**
   * 구매 금액이 1,000원 단위인지 검증합니다.
   * 1,000원 단위가 아닐 시 에러를 발생시킵니다.
   * @param {number} input
   */
  #purchaseAmountUnitValidate(input) {
    if (input % LOTTO_MACHINE_RULES.inputUnit !== 0) {
      throw new Error(ERROR_MESSAGE.unit);
    }
  }

  /**
   * 당첨 번호를 입력 받은 후 저장합니다.
   * @returns {WinningNumbers} [당첨 번호]
   */
  async #getWinningNumbers() {
    OutputView.printNewLine();
    while (this.#INFINITE) {
      try {
        const winningNumbersInput = await InputView.readWinningNumbers();

        return new WinningNumbers(this.#splitAndParseNumbers(winningNumbersInput));
      } catch (e) {
        Console.print(e.message);
      }
    }
  }

  /**
   * 쉼표(,)를 기준으로 값을 분리하고, 숫자로 변환하여 반환합니다.
   * @param {string} input
   * @returns {number[]} [숫자 배열]
   */
  #splitAndParseNumbers(input) {
    const COMMA = ',';
    return input.split(COMMA).map((number) => this.#numberParser(number));
  }

  /**
   * 보너스 숫자를 입력받은 후 숫자 형태로 저장합니다.
   */
  async #getBonusNumber() {
    OutputView.printNewLine();
    while (this.#INFINITE) {
      try {
        const bonusNumberInput = await InputView.readBonusNumber();
        const parseBonusNumber = this.#numberParser(bonusNumberInput);

        this.#winningNumbers.setBonusNumber(parseBonusNumber);
        break;
      } catch (e) {
        Console.print(e.message);
      }
    }
  }

  /**
   * player의 로또 번호와 당첨 번호를 비교합니다.
   * 3개 이상 맞추었을 시, 등수에 개수를 추가하여 저장합니다.
   */
  #findMatchCount() {
    this.#player.getLottoTickets().forEach((lotto) => {
      const matchCount = lotto
        .getNumbers()
        .filter((number) => this.#winningNumbers.getNumbers().includes(number)).length;

      if (LOTTO_MACHINE_RULES.minimumWiningCount <= matchCount) {
        this.#player.setRankCounts(matchCount, !!this.#winningNumbers.getBonusNumber());
      }
    });
  }

  /**
   * 등수 개수를 통해 당첨 통계를 출력합니다.
   */
  #calculateWinningStats() {
    const rankCountsObjectEntries = Object.entries(this.#player.getRankCounts()).sort(
      (lowRank, highRank) => highRank - lowRank,
    );

    OutputView.printwinningStats();
    rankCountsObjectEntries.forEach(([rank, counts]) => {
      OutputView.printCorrectCounts(rank, counts);
    });

    this.#player.calculateWinningAmount();
  }

  /**
   * 수익률을 계산하여 소수점 첫 번째 자리까지 반올림하여 반환합니다.
   * @returns {string} [수익률]
   */
  #calculateProfit() {
    return ((this.#player.getWinningAmount() / this.#player.getPurchaseAmount()) * 100).toFixed(1);
  }

  /**
   * 수익률을 출력합니다.
   */
  #printProfit() {
    OutputView.printProfit(this.#calculateProfit());
  }
}
