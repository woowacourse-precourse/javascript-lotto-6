import { Console } from "@woowacourse/mission-utils";

class InputPrompter {
  constructor(promptMessage, validate) {
    this.promptMessage = promptMessage;
    this.validate = validate;
  }

  async collect() {
    let input;
    let isValid = false;

    while (!isValid) {
      // eslint-disable-next-line no-await-in-loop
      input = await Console.readLineAsync(this.promptMessage);
      isValid = this.#checkValidity(input);
    }

    return input;
  }

  #checkValidity(input) {
    try {
      this.validate(input);
      return true;
    } catch (error) {
      InputPrompter.#handleError(error);
      return false;
    }
  }

  static #handleError(error) {
    if (error) Console.print(error.message);
    else throw error;
  }
}

export default InputPrompter;
