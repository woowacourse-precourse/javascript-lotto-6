import { ERROR_MESSAGES } from './constants.js';

export const splitAndTrim = (inputString) => {
  if (inputString === '') {
    throw new Error(ERROR_MESSAGES.EMPTY_INPUT);
  }

  const items = inputString.split(',');

  for (let i = 0; i < items.length; i++) {
    items[i] = items[i].trim();
  }

  return items;
};
