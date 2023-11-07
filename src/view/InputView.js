import { Console } from '@woowacourse/mission-utils';
import { INPUT_MESSAGE } from '../utils/constants';
import InputValidator from '../validator/inputValidator';

const getInputWithValidate = async (userInput, validate) => {
  const input = await userInput();
  validate(input);
  return input;
};

const InputView = {
  purchaseAmount: async () => {
    const amount = await getInputWithValidate(
      async () => Console.readLineAsync(INPUT_MESSAGE.PURCHASE_AMOUNT),
      InputValidator.purchaseInput,
    );
    return Number(amount);
  },

  winningNumbers: async () => {
    const numbers = await getInputWithValidate(
      async () => Console.readLineAsync(INPUT_MESSAGE.WINNING_NUMBERS),
      InputValidator.winningNumbers,
    );
    return numbers.split(',').map(number => Number(number));
  },

  bonusNumber: async () => {
    const bonusNumber = await getInputWithValidate(
      async () => Console.readLineAsync(INPUT_MESSAGE.BONUS_NUMBER),
      InputValidator.bonusNumber,
    );
    return Number(bonusNumber);
  },
};

export default InputView;
