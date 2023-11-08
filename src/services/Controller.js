import { Console } from '@woowacourse/mission-utils';
import { LOTTO_PRICE, WINNING_RANK_COUNT } from '../constants/lotto';
import { INPUT } from '../constants/message/view';
import bank from '../domain/Bank';
import shop from '../domain/shop';
import validationUtils from './utils/validation';
import {
  consoleInput,
  printBuyLotto,
  printNewLine,
  printProfitRate,
  printPurchasedLottoCount,
  printWinningStatistics,
} from './view';
import { ZERO } from '../constants/validate';

const COMMA = ',';

/**
 * 쉼표(,)를 기준으로 구문을 나누어 반환한다
 * @param {string} winningNumber - 당첨 번호
 */
const commaSplit = (winningNumber) => {
  return winningNumber.split(COMMA);
};

/**
 * 당첨번호에 사용될 함수들의 목록입니다
 * @param {string} number - 하나의 당첨 번호
 */
const validateConvertStringToLottoNumber = (number) => {
  validationUtils.isStringToThrow(number);
  validationUtils.checkStringLength(number);
  validationUtils.zeroIndexValueNotZero(number);
  validationUtils.checkConvertStringToNumber(number);
  validationUtils.checkRange(Number(number));
};

/**
 * 문자열 배열을 숫자 배열로 반환합니다
 * @param {string[]} stringArray
 */
const convertStringArrayToNumberArray = (stringArray) => {
  return stringArray.map((str) => Number(str));
};

/**
 * 당첨 번호 유효성 검사
 * @param {string[]} winningNumbers - 당첨 번호 배열
 */
const validateInputWinningNumber = (winningNumbers) => {
  validationUtils.isArrayToThrow(winningNumbers);
  validationUtils.checkArrayDuplicate(winningNumbers);
  winningNumbers.forEach((number) => {
    validateConvertStringToLottoNumber(number);
  });
};

const validatePurchaseAmount = (purchaseAmount) => {
  validationUtils.isStringToThrow(purchaseAmount);
  validationUtils.checkConvertStringToNumber(purchaseAmount);
  validationUtils.zeroIndexValueNotZero(purchaseAmount);
};

class LottoController {
  #purchaseAmount;
  #lottos;
  #ranks;
  #winningNumber;
  #bonusNumber;

  constructor() {
    this.#ranks = {
      [ZERO]: 0,
      [WINNING_RANK_COUNT.firstPlace]: 0,
      [WINNING_RANK_COUNT.secondPlace]: 0,
      [WINNING_RANK_COUNT.thirdPlace]: 0,
      [WINNING_RANK_COUNT.fourthPlace]: 0,
      [WINNING_RANK_COUNT.fifthPlace]: 0,
    };
  }

  #saveRank() {
    this.#lottos.forEach((lotto) => {
      this.#ranks[
        `${lotto.getWinningRank(this.#winningNumber, this.#bonusNumber)}`
      ] += 1;
    });
  }

  #buyLotto() {
    this.#lottos = shop.lotterySales(this.#purchaseAmount);
  }

  async #bonusNumberInitialize() {
    try {
      const bonusNumber = await consoleInput(INPUT.bonusNumber);
      validateConvertStringToLottoNumber(bonusNumber);
      this.#bonusNumber = Number(bonusNumber);
      printNewLine();
      return true;
    } catch (error) {
      Console.print(error.message);
      return false;
    }
  }

  async #winningNumberInitialize() {
    try {
      const winningNumber = await consoleInput(INPUT.winningNumber);
      const arrayWinningNumber = commaSplit(winningNumber);
      validateInputWinningNumber(arrayWinningNumber);
      this.#winningNumber = convertStringArrayToNumberArray(arrayWinningNumber);
      printNewLine();
      return true;
    } catch (error) {
      Console.print(error.message);
      return false;
    }
  }

  async #purchaseAmountInitialize() {
    try {
      const input = await consoleInput(INPUT.purchaseAmount);
      validatePurchaseAmount(input);
      this.#purchaseAmount = Number(input);
      printNewLine();
      return true;
    } catch (error) {
      Console.print(error.message);
      return false;
    }
  }

  async #loopInput(callbackFn) {
    let loop = false;
    do {
      loop = await callbackFn.call(this);
    } while (!loop);
  }

  async play() {
    await this.#loopInput(this.#purchaseAmountInitialize);
    this.#buyLotto();
    printPurchasedLottoCount(this.#purchaseAmount / LOTTO_PRICE);
    printBuyLotto(this.#lottos);
    await this.#loopInput(this.#winningNumberInitialize);
    await this.#loopInput(this.#bonusNumberInitialize);
    this.#saveRank();
    printWinningStatistics(this.#ranks);
    const amount = bank.calculateTotalPrizeAmount(this.#ranks);
    printProfitRate(bank.calculateProfitRate(this.#purchaseAmount, amount));
  }
}

export default LottoController;
