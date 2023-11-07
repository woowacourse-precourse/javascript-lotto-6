import { Console } from '@woowacourse/mission-utils';
import InputValidator from '../../domain/validator/InputValidator.js';
import MESSAGE from '../../constants/message.js';
import NUMBER from '../../constants/number.js';

export default async function getLottoCount() {
  const userInput = await Console.readLineAsync(MESSAGE.purchaseAmount + '\n');
  const inputValidator = new InputValidator();

  inputValidator.validateUnitCost(userInput);

  const lottoCount = parseInt(userInput / NUMBER.unitCost);

  return lottoCount;
}
