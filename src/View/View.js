import InputView from './InputView.js';
import OutputView from './OutputView.js';
import MESSAGE from '../constants/message.js';

class View {
  #inputView = InputView;

  #outputView = OutputView;

  async readUserInput() {
    const userInput = await this.#inputView.readLineAsync(
      MESSAGE.read.userInput,
    );

    return userInput;
  }

  print(message) {
    this.#outputView.print(message);
  }
}

export default View;
