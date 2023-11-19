import { MESSAGE } from '../constants/Message.js';
import { DELIMITER } from '../constants/Rule.js';
import { hasNoDelimiter } from '../utils/index.js';
import { InputView } from '../view/index.js';
import OutputController from './OutputController.js';

const InputController = {
  async readWinningNumbers() {
    try {
      const value = await InputView.readInput(MESSAGE.winningNumbersQuery);
      hasNoDelimiter(value);
      return value.split(DELIMITER).map((v) => Number(v));
    } catch (error) {
      OutputController.printErrorMessage(error);
    }
  },
  /**
   *
   * @param {string} query
   * @returns {Promise<number>} number
   */
  async readNumber(query) {
    try {
      const value = await InputView.readInput(query);

      return Number(value);
    } catch (error) {
      OutputController.printErrorMessage(error);
    }
  },
};

export default InputController;
