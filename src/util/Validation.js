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

const checkInputLength = (input, length, message) => {
  if (input.split(',').length !== length) throw new Error(message);
};

const checkInputRange = (input, message) => {
  if (input < GAME_RULE_NUMBER.min || input > GAME_RULE_NUMBER.max)
    throw new Error(message);
};

const checkWinningRange = (input) => {
  input
    .split(',')
    .forEach((number) => checkInputRange(number, ERROR_MESSAGES.winningRange));
};
const checkWinningType = (input) => {
  input
    .split(',')
    .forEach((number) => checkInputType(number, ERROR_MESSAGES.winningType));
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
  checkWinningType(input);
  checkWinningRange(input);
  checkInputLength(
    input,
    GAME_RULE_NUMBER.winningNumbersLength,
    ERROR_MESSAGES.winningLength,
  );
};

const checkBonusNumber = (input) => {
  checkInput(input);
  checkInputLength(
    input,
    GAME_RULE_NUMBER.bonusNumberLength,
    ERROR_MESSAGES.bonusLength,
  );
  checkInputType(input, ERROR_MESSAGES.bonusType);
  checkInputRange(input, ERROR_MESSAGES.bonusRange);
};

checkBonusNumber('11');
checkPurchasingMoney('8000');
checkWinningNumbers('1,2,3,4,5,6');

export { checkPurchasingMoney, checkWinningNumbers, checkBonusNumber };
