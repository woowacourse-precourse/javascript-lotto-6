import { Console } from '@woowacourse/mission-utils';
import InputValidator from '../../domain/validator/InputValidator.js';
import MESSAGE from '../../constants/message.js';
import SYMBOL from '../../constants/symbol.js';
import retryForError from '../../domain/utils/retryForError.js';

export default async function getLottoAmount() {
  let userInput = null;

  await retryForError(async () => {
    userInput = await Console.readLineAsync(
      MESSAGE.purchaseAmount + SYMBOL.blankDivider,
    );
    const inputValidator = new InputValidator();
    inputValidator.validateNaturalNumber(userInput);
    inputValidator.validateUnitCost(userInput);
  });

  const lottoAmount = Number(userInput);
  return lottoAmount;
}
