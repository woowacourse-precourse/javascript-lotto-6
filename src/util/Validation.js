import { ERROR_MESSAGES, GAME_RULE_NUMBER } from '../constant/constants.js';

const checkDivisibleByLottoPrice = (money) => {
  if (money % GAME_RULE_NUMBER.price)
    throw new Error(ERROR_MESSAGES.divisibleByLottoPrice);
};

const checkInputType = (input, message) => {
  if (input.match(/\D/)) throw new Error(message);
};

const checkMoneyZero = (input) => {
  if (!input) throw new Error(ERROR_MESSAGES.inputMoneyZero);
};

const checkInputBlank = (input) => {
  if (input.match(' ')) throw new Error(ERROR_MESSAGES.inputBlank);
};

const checkPurchasingMoney = (input) => {
  checkInputBlank(input);
  checkDivisibleByLottoPrice(input);
  checkInputType(input, ERROR_MESSAGES.inputMoneyType);
  checkMoneyZero(input);
};

const checkWinningNumbers = (input) => {
  checkInputBlank(input);
  checkInputType(input, ERROR_MESSAGES.winningType);
};

const checkBonusNumber = (input) => {
  checkInputBlank(input);
  checkInputType(input, ERROR_MESSAGES.bonusType);
};

export { checkPurchasingMoney, checkWinningNumbers, checkBonusNumber };
