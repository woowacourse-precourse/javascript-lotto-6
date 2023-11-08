import ERROR_MESSAGE from '../constants/errors.js';
import formation from '../utils/formation.js';

class AppError extends Error {
  static prefix = '[ERROR]';

  /**
   * @type {string}
   */
  name;

  constructor(message, ...args) {
    super(`${AppError.prefix} ${formation.format(message, ...args)}`);
    this.name = this.constructor.name;
  }
}

export default AppError;
