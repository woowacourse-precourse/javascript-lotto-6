import { ERROR_MESSAGES, GAME_RULE_NUMBER } from '../constant/Constants.js';

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

const checkLottoLength = (input, length, message) => {
  if (input.length !== length) throw new Error(message);
};

const checkInputRange = (input, message) => {
  if (input < GAME_RULE_NUMBER.min || input > GAME_RULE_NUMBER.max)
    throw new Error(message);
};

const checkBonusDuplicated = (bonusNumber, winningNumbers) => {
  if (winningNumbers.includes(bonusNumber))
    throw new Error(ERROR_MESSAGES.bonusDuplicated);
};

const checkDuplicatedNumber = (numbers) => {
  if (numbers.length !== new Set(numbers).size)
    throw new Error(ERROR_MESSAGES.duplicatedNumber);
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

const checkLottoNumbers = (inputs) => {
  checkDuplicatedNumber(inputs);
  checkLottoLength(
    inputs,
    GAME_RULE_NUMBER.lottoLength,
    ERROR_MESSAGES.lottoLength,
  );
  inputs.forEach((input) => {
    const inputToString = input.toString();
    checkInputType(inputToString, ERROR_MESSAGES.lottoType);
    checkInputRange(inputToString, ERROR_MESSAGES.lottoRange);
  });
};

const checkWinningNumbers = (inputs) => {
  checkDuplicatedNumber(inputs.split(','));
  checkInputLength(
    inputs,
    GAME_RULE_NUMBER.lottoLength,
    ERROR_MESSAGES.lottoLength,
  );
  inputs.split(',').forEach((input) => {
    checkInput(input);
    checkInputType(input, ERROR_MESSAGES.lottoType);
    checkInputRange(input, ERROR_MESSAGES.lottoRange);
  });
};

const checkBonusNumber = (inputs, winningNumbers) => {
  checkBonusDuplicated(inputs, winningNumbers);
  checkInput(inputs);
  checkInputType(inputs, ERROR_MESSAGES.bonusType);
  checkInputRange(inputs, ERROR_MESSAGES.bonusRange);
  checkInputLength(
    inputs,
    GAME_RULE_NUMBER.bonusNumberLength,
    ERROR_MESSAGES.bonusLength,
  );
};

export {
  checkPurchasingMoney,
  checkLottoNumbers,
  checkBonusNumber,
  checkWinningNumbers,
};
