import { Console } from '@woowacourse/mission-utils';
import InputValidator from '../../domain/validator/InputValidator.js';
import MESSAGE from '../../constants/message.js';

export default async function getLottoAmount() {
  const userInput = await Console.readLineAsync(MESSAGE.purchaseAmount + '\n');
  const inputValidator = new InputValidator();

  inputValidator.validateUnitCost(userInput);

  const lottoAmount = userInput;
  return lottoAmount;
}
