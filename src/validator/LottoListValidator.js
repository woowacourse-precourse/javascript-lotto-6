import paramType from '../lib/paramType/src/paramType.js';
import GameError from '../errors/GameError.js';
import Lotto from '../Lotto.js';
import { ERROR_MESSAGE } from '../constants/message.js';

export default class LottoListValidator {
  constructor(lottoList, _ = paramType(lottoList, Array)) {
    this.#validate(lottoList);
  }

  #validate(lottoList, _ = paramType(lottoList, Array)) {
    this.#isAllLottoInstance(lottoList);
  }

  #isAllLottoInstance(lottoList) {
    if (lottoList.some((lotto) => !(lotto instanceof Lotto))) {
      throw new GameError(ERROR_MESSAGE.HAVE_NOT_LOTTO_INSTANCE);
    }
  }
}
