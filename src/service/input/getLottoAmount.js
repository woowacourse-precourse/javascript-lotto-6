import { Console } from '@woowacourse/mission-utils';
import InputValidator from '../../domain/validator/InputValidator.js';
import MESSAGE from '../../constants/message.js';
import SYMBOL from '../../constants/symbol.js';

export default async function getLottoAmount() {
  const userInput = await Console.readLineAsync(
    MESSAGE.purchaseAmount + SYMBOL.blankDivider,
  );
  const inputValidator = new InputValidator();

  inputValidator.validateUnitCost(userInput);

  const lottoAmount = Number(userInput);
  return lottoAmount;
}
