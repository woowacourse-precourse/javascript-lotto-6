import LottoValidator from "./LottoValidator";

class LottoBonus {
  #bonusNumber;

  constructor(lottoNumbers, bonusNumber) {
    LottoValidator.validateLottoNumber(bonusNumber);
    LottoValidator.validateBonusNumber(lottoNumbers, bonusNumber);    
    this.#bonusNumber = bonusNumber;
  }

  getBonus() {
    return this.#bonusNumber;
  }
}

export default LottoBonus;
