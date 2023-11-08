import ERROR from '../constant/Error.js';
import LOTTO from '../constant/Lotto.js';
import LottoNumberError from '../error/LottoNumberError.js';
import InputValidator from './InputValidator.js';

const validateLottoNumber = (lottoNumber) => {
  const range = [LOTTO.minLottoNum, LOTTO.maxLottoNum];

  if (InputValidator.isNan(lottoNumber))
    throw new LottoNumberError(ERROR.isNan);
  if (InputValidator.isNotInRange(range, lottoNumber))
    throw new LottoNumberError(ERROR.range);
};

export default validateLottoNumber;
