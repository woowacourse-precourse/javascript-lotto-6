import MESSAGES from '../constants/message.js';

const throwError = (message) => {
  throw new Error(`${MESSAGES.error} ${message}`);
};

export default throwError;
