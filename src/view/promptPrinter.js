import { Console } from '@woowacourse/mission-utils';
import paramType from '../lib/paramType/src/paramType.js';
import { UserInputError } from '../errors/UserInputErrors.js';

export default class PromptPrinter {
  userInputErrorMessage(error, _ = paramType(error, UserInputError)) {
    this.#onPrint(error.message);
  }

  #onPrint(message, _ = paramType(message, 'string')) {
    Console.print(message);
  }
}
