import { validateLottoBonusNumber } from '../validator/index.js';

export default class BonusLotto {
  #bonusNumber;

  constructor(lottoNumbers, bonusLottoNumber) {
    validateLottoBonusNumber(lottoNumbers, bonusLottoNumber);
    this.#bonusNumber = Number(bonusLottoNumber);
  }

  getBonusLottoNumber() {
    return this.#bonusNumber;
  }
}
