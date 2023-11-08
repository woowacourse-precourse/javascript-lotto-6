import { Console } from '@woowacourse/mission-utils';
import InputValidator from '../../domain/validator/InputValidator.js';
import MESSAGE from '../../constants/message.js';
import SYMBOL from '../../constants/symbol.js';
import retryForError from '../../domain/utils/retryForError.js';

export default async function getBonusNumber() {
  let userInput = null;

  await retryForError(async () => {
    userInput = await Console.readLineAsync(
      SYMBOL.blankDivider + MESSAGE.bonusNumber + SYMBOL.blankDivider,
    );

    const inputValidator = new InputValidator();
    inputValidator.validateNotInRange(userInput);
  });

  const bonusNumber = Number(userInput);
  return bonusNumber;
}
