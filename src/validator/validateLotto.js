import ERROR from '../constant/Error.js';
import LOTTO from '../constant/Lotto.js';
import LottoInputError from '../error/LottoInputError.js';
import InputValidator from './InputValidator.js';

const validateLotto = (lotto) => {
  if (InputValidator.isArrayHaveNan(lotto))
    throw new LottoInputError(ERROR.isNan);
  if (lotto.length !== LOTTO.count) throw new LottoInputError(ERROR.count);
  if (InputValidator.isDuplicated(lotto))
    throw new LottoInputError(ERROR.duplicated);
};

export default validateLotto;
