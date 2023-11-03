import ERROR_CODE from '../error/errorCode.js';

export default function checkIsTooSmall(input) {
  const inputValue = Number(input);
  const isTooSmall = inputValue < 1000;
  if (isTooSmall) {
    throw new Error(`${ERROR_CODE.valueIsTooSmall}`);
  }
}
