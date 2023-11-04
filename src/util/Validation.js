import { ERROR_MESSAGES, GAME_RULE_NUMBER } from '../constant/constants.js';

const checkDivisibleByLottoPrice = (money) => {
  if (money % GAME_RULE_NUMBER.price)
    throw new Error(ERROR_MESSAGES.divisibleByLottoPrice);
};

const checkInputType = (input, message) => {
  if (input.match(/\D/g)) throw new Error(message);
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

const checkInputLength = (input, length, message) => {
  if (input.split(',').length !== length) throw new Error(message);
};

const checkInputRange = (input, message) => {
  if (input < GAME_RULE_NUMBER.min || input > GAME_RULE_NUMBER.max)
    throw new Error(message);
};

const checkInput = (input) => {
  checkInputSpace(input);
  checkInputBlank(input);
};

const checkPurchasingMoney = (inputs) => {
  checkInputType(inputs, ERROR_MESSAGES.inputMoneyType);
  checkDivisibleByLottoPrice(inputs);
  checkMoneyMinimun(inputs);
  inputs.split(',').forEach((input) => {
    checkInput(input);
  });
};

const checkWinningNumbers = (inputs) => {
  checkInputLength(
    inputs,
    GAME_RULE_NUMBER.winningNumbersLength,
    ERROR_MESSAGES.winningLength,
  );
  inputs.split(',').forEach((input) => {
    checkInput(input);
    checkInputType(input, ERROR_MESSAGES.winningType);
    checkInputRange(input, ERROR_MESSAGES.winningRange);
  });
};

const checkBonusNumber = (inputs) => {
  checkInputLength(
    inputs,
    GAME_RULE_NUMBER.bonusNumberLength,
    ERROR_MESSAGES.bonusLength,
  );
  inputs.split(',').forEach((input) => {
    checkInput(input);
    checkInputType(input, ERROR_MESSAGES.bonusType);
    checkInputRange(input, ERROR_MESSAGES.bonusRange);
  });
};

export { checkPurchasingMoney, checkWinningNumbers, checkBonusNumber };
