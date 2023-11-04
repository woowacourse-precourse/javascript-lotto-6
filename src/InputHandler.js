import { Console } from "@woowacourse/mission-utils";
import InputError from "./InputError.js";

class InputHandler {
  constructor(promptMessage, isValid, errorMessage) {
    this.promptMessage = promptMessage;
    this.validate = (input) => {
      if (!isValid(input)) throw new InputError(errorMessage);
    };
  }

  async collect() {
    let input;
    let isValid = false;

    while (!isValid) {
      input = await Console.readLineAsync(this.promptMessage);
      isValid = this.checkValidity(input);
    }

    return input;
  }

  checkValidity(input) {
    try {
      this.validate(input);
      return true;
    } catch (error) {
      InputHandler.handleError(error);
      return false;
    }
  }

  static handleError(error) {
    if (error instanceof InputError) Console.print(error.message);
    else throw error;
  }
}

export default InputHandler;
