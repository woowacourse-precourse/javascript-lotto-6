import { Console } from '@woowacourse/mission-utils';
import InputValidator from '../../domain/validator/InputValidator.js';
import MESSAGE from '../../constants/message.js';
import SYMBOL from '../../constants/symbol.js';

export default async function getBonusNumber() {
  const userInput = await Console.readLineAsync(
    SYMBOL.blankDivider + MESSAGE.bonusNumber + SYMBOL.blankDivider,
  );

  const inputValidator = new InputValidator();

  inputValidator.validateNotInRange(userInput);

  const bonusNumber = Number(userInput);
  return bonusNumber;
}
