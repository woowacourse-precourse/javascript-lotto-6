import ERROR_MESSAGES from '../constants/errorMessage.js';

const throwError = (message) => {
  throw new Error(`${ERROR_MESSAGES.error} ${message}`);
};

export default throwError;
