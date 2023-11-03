import { ERROR_MESSAGES, GAME_RULE_NUMBER } from '../constant/constants.js';

const checkDivisibleByLottoPrice = (money) => {
  if (money % GAME_RULE_NUMBER.price)
    throw new Error(ERROR_MESSAGES.divisibleByLottoPrice);
};

const checkInputType = (input, message) => {
  if (input.match(/\D/)) throw new Error(message);
};

const checkInputSpace = (input) => {
  if (input.match(' ')) throw new Error(ERROR_MESSAGES.inputSpace);
};

const checkInputBlank = (input) => {
  if (input === '') throw new Error(ERROR_MESSAGES.inputBlank);
};

const checkMoneyMinimun = (input) => {
  if (input < GAME_RULE_NUMBER.price)
    throw new Error(ERROR_MESSAGES.inputMoneyMinimun);
};

const checkWinningRange = (input) => {
  if (input < GAME_RULE_NUMBER.min || input > GAME_RULE_NUMBER.max)
    throw new Error(ERROR_MESSAGES.winningRange);
};

const checkInputInteger = (input, message) => {
  if (+input !== Math.floor(+input)) throw new Error(message);
};

const checkInput = (input) => {
  checkInputSpace(input);
  checkInputBlank(input);
};

const checkPurchasingMoney = (input) => {
  checkInput(input);
  checkDivisibleByLottoPrice(input);
  checkInputType(input, ERROR_MESSAGES.inputMoneyType);
  checkMoneyMinimun(input);
};

const checkWinningNumbers = (input) => {
  checkInput(input);
  checkInputType(input, ERROR_MESSAGES.winningType);
  checkWinningRange(input);
  checkInputInteger(input, ERROR_MESSAGES.winningInteger);
};

const checkBonusNumber = (input) => {
  checkInput(input);
  checkInputType(input, ERROR_MESSAGES.bonusType);
  checkInputInteger(input, ERROR_MESSAGES.bonusInteger);
};

export { checkPurchasingMoney, checkWinningNumbers, checkBonusNumber };
