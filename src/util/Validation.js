import { ERROR_MESSAGES, GAME_RULE_NUMBER } from '../constant/constants.js';

const checkDivisibleByLottoPrice = (money) => {
  if (money % GAME_RULE_NUMBER.price)
    throw new Error(ERROR_MESSAGES.divisibleByLottoPrice);
};

const checkInputType = (input, message) => {
  if (input.match(/\D/)) throw new Error(message);
};

const checkPurchasingMoney = (input) => {
  checkDivisibleByLottoPrice(input);
  checkInputType(input, ERROR_MESSAGES.inputMoneyType);
};

const checkWinningNumbers = (input) => {
  checkInputType(input, ERROR_MESSAGES.winningType);
};

const checkBonusNumber = (input) => {
  checkInputType(input, ERROR_MESSAGES.bonusType);
};
