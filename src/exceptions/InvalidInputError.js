import { ERROR_MESSAGE_PREFIX } from '../constants/lotto.js';

class InvalidInputException extends Error {
  constructor(error) {
    super(`${ERROR_MESSAGE_PREFIX} ${error}`);
  }
}

export default InvalidInputException;
