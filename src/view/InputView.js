import {Console} from "@woowacourse/mission-utils";
import {InputValidator} from "./InputValidator.js";
import {InputConverter} from "./InputConverter.js";

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
        const input = await Console.readLineAsync("구입금액을 입력해 주세요.\n")
        this.#inputValidator.validateMoneyInput(input)
        return this.#inputConverter.convertToMoney(input)
    }

    /**
     *
     * @return {Promise<numbers[]>}
     * @description - [2. 당첨 번호 입력]
     *
     * 검증 한 후 리스트로 변환해서 리턴
     */

    async inputWinningNumbers() {
        const input = await Console.readLineAsync("\n당첨 번호를 입력해 주세요.\n")
        this.#inputValidator.validateWinningNumberInput(input)
        return this.#inputConverter.convertToWinningNumbers(input)
    }

    /**
     *
     * @return {Promise<number>}
     * @description - [3.보너스 번호 입력]
     *
     * 검증 한 후 `number`로 변환해서 리턴
     */
    async inputBonusNumber() {
        const input = await Console.readLineAsync("\n보너스 번호를 입력해 주세요.\n")
        this.#inputValidator.validateBonusNumberInput(input)
        return this.#inputConverter.convertToBonusNumber(input)
    }
}