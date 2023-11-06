import CustomError from '../errors/CustomError.js';
import { ERROR_MESSAGES } from '../constants/messages.js';
import LOTTO_CONSTANT from '../constants/lotto.js';

const validateLottoNumbers = (numbers) => {
  if (numbers.length !== LOTTO_CONSTANT.count) throw new CustomError(ERROR_MESSAGES.lottoNumberLength);

  const duplicateFlag = [...new Set(numbers)].length !== numbers.length;
  if (duplicateFlag) throw new CustomError(ERROR_MESSAGES.lottoNumberDuplicate);
};

export default validateLottoNumbers;
