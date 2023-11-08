import { Console } from '@woowacourse/mission-utils';
import InputValidator from '../../domain/validator/InputValidator.js';
import MESSAGE from '../../constants/message.js';
import SYMBOL from '../../constants/symbol.js';
import retryForError from '../../domain/utils/retryForError.js';

export default async function getWinningNumbers() {
  let userInput = null;

  await retryForError(async () => {
    userInput = await Console.readLineAsync(
      SYMBOL.blankDivider + MESSAGE.winningNumbers + SYMBOL.blankDivider,
    );

    const inputValidator = new InputValidator();
    inputValidator.validateNoIncludeBlank(userInput);
  });

  const winningNumbers = userInput.split(',');
  return winningNumbers;
}
