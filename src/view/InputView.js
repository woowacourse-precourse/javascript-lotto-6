import { Console } from '@woowacourse/mission-utils';
import { INPUT_MESSAGE } from '../Constants';

const getInputWithValidate = async (userInput, validate) => {
  const input = await userInput();
  validate(input);
  return input;
};

const InputView = {
  purchaseAmount: async () => {
    const amount = await getInputWithValidate(
      async () => Console.readLineAsync(INPUT_MESSAGE.PURCHASE_AMOUNT),
      // ValidateInput
    );
    return Number(amount);
  },

  winningNumbers: async () => {
    const numbers = await getInputWithValidate(
      async () => Console.readLineAsync(INPUT_MESSAGE.WINNING_NUMBERS),
      // ValidateInput
    );
    return numbers.split(',').map(number => Number(number));
  },

  bonusNumber: async () => {
    const bonusNumber = await getInputWithValidate(
      async () => Console.readLineAsync(INPUT_MESSAGE.BONUS_NUMBER),
      // ValidateInput
    );
    return Number(bonusNumber);
  },
};

export default InputView;
