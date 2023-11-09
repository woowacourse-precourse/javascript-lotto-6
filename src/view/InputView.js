import {Console} from "@woowacourse/mission-utils";
import {InputValidator} from "./InputValidator.js";
import {InputConverter} from "./InputConverter.js";
import {LottoMachine} from "../domain/LottoMachine.js";
import {MESSAGE} from "../constants/constants.js";

export class InputView {
  /**
   * @type {InputValidator}
   */
  #inputValidator;
  /**
   *
   * @type {InputConverter}
   */
  #inputConverter;

  /**
   *
   * @param {InputValidator} inputValidator
   * @param {InputConverter} inputConverter
   */

  constructor(inputValidator, inputConverter) {
    this.#inputValidator = inputValidator;
    this.#inputConverter = inputConverter;
  }

  /**
   *
   * @return {Promise<Money>}
   * @description - [1. 구입 금액 입력]
   *
   * 검증 한 후 `number`로 변환해서 리턴
   */
  async inputMoney() {
    const input = await Console.readLineAsync(MESSAGE.INPUT_MONEY);
    try {
      this.#inputValidator.validateMoneyInput(input);
      return this.#inputConverter.convertToMoney(input);
    } catch (error) {
      // 검증에 실패한 경우 예외가 발생하며 해당 부분부터 다시 입력받게 catch문 실행
      // 예외 발생 시 에러 던질때 설정한 메세지 출력
      this.#printError(error);
      return await this.inputMoney(); // 재실행
    }
  }

  /**
   *
   * @return {Promise<LottoMachine>}
   * @description 당첨 번호, 보너스 번호를 입력받아서 로또 머신을 새로 만든다
   */
  async inputLottoMachine() {
    const winningNumbers = await this.#inputWinningNumbers();
    const bonusNumber = await this.#inputBonusNumber();

    return new LottoMachine(winningNumbers, bonusNumber);
  }

  /**
   *
   * @return {Promise<number[]>}
   * @description - [2. 당첨 번호 입력]
   *
   * 검증 한 후 리스트로 변환해서 리턴
   */

  async #inputWinningNumbers() {
    try {
      const input = await Console.readLineAsync(
        MESSAGE.INPUT_WINNING_NUMBER
      );
      this.#inputValidator.validateWinningNumberInput(input);
      return this.#inputConverter.convertToWinningNumbers(input);
    } catch (error) {
      //검증 실패 시 재실행하기위해
      this.#printError(error);
      return await this.#inputWinningNumbers();
    }
  }

  /**
   *
   * @return {Promise<number>}
   * @description - [3.보너스 번호 입력]
   *
   * 검증 한 후 `number`로 변환해서 리턴
   */
  async #inputBonusNumber() {
    try {
      const input = await Console.readLineAsync(MESSAGE.INPUT_BONUS_NUMBER);
      this.#inputValidator.validateBonusNumberInput(input);
      return this.#inputConverter.convertToBonusNumber(input);
    } catch (error) {
      //에러 던지고 재실행~
      this.#printError(error);
      return await this.#inputBonusNumber();
    }
  }

  /**
   *
   * @param {Error} error
   * @return {void}
   */
  #printError(error) {
    Console.print(`${error.message}`);
  }
}
