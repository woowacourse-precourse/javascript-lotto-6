import ERROR from '../constants/error.js';
import { MessageFormat } from '../utils/messageFormat.js';

class AppError extends Error {
  constructor(message) {
    super(MessageFormat.error(message));
    this.name = 'AppError';
  }
}

export default AppError;
