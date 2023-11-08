import ERROR from '../constant/Error.js';
import LOTTO from '../constant/Lotto.js';
import WinningLottoError from '../error/WinningLottoError.js';
import InputValidator from './InputValidator.js';

const validateLotto = (lotto) => {
  const decapsulatedLotto = lotto.map((lottoNumber) => lottoNumber.get());

  if (InputValidator.isArrayHaveNan(decapsulatedLotto))
    throw new WinningLottoError(ERROR.isNan);
  if (lotto.length !== LOTTO.count) throw new WinningLottoError(ERROR.count);
  if (InputValidator.isDuplicated(decapsulatedLotto))
    throw new WinningLottoError(ERROR.duplicated);
};

export default validateLotto;
