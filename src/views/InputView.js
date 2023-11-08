import { Console } from '@woowacourse/mission-utils';
import Validator from '../utils/Validator.js';

const InputView = {
  async readLineAsync(money) {
    const inputMoney = await Console.readLineAsync(money);
    Validator.validInputMoneyType(inputMoney);
    // Validator.validInputMoneyEmpty(inputMoney);
    // Validator.validInputMoneyAmount(inputMoney);
    // Validator.validInputMoneyRemainder(inputMoney);

    return inputMoney;
  },

  async lottoReadLineAsync(numbers) {
    const inputLottoNumbers = await Console.readLineAsync(numbers);
    const lottoNumbers = inputLottoNumbers
      .split(',')
      .map((item) => Number(item));

    Validator.validInputLottoType(lottoNumbers);
    Validator.validInputNumbersEmpty(lottoNumbers);
    Validator.validInputLottoLength(lottoNumbers);
    Validator.validInputNumbersDuplicate(lottoNumbers);
    Validator.validInputLottoScope(lottoNumbers);

    return lottoNumbers;
  },

  async bonusReadLineAsync(number) {
    const inputBonusNumber = await Console.readLineAsync(number);
    const bonusNumber = Number(inputBonusNumber);

    Validator.validBonusNumberType(bonusNumber);
    Validator.validInputBonusEmpty(bonusNumber);
    Validator.validBonusNumberScope(bonusNumber);

    return bonusNumber;
  },
};

export default InputView;
