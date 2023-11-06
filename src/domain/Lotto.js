import LottoDto from '../dto/LottoDto.js';
import Parser from '../parser/Parser.js';
import calcMatchCount from '../utils/calcMatchCount.js';
import validateBonusNumber from '../validator/validateBonusNumber.js';
import validateLotto from '../validator/validateLotto.js';
import LottoNumber from './LottoNumber.js';

// 파서와 유효성 검사 진행
class Lotto {
  #lotto = [];

  constructor(lotto) {
    const parsedLotto = this.#parseLotto(lotto);

    Lotto.#validate(parsedLotto);

    this.#lotto = parsedLotto;
  }

  static #validate(lotto) {
    validateLotto(lotto);
  }

  createBonusNumber(bonusNumberRequest) {
    const bonusNumber = new LottoNumber(bonusNumberRequest);

    validateBonusNumber(this.get(), bonusNumber.get());

    return bonusNumber;
  }

  getMatchCount(winningLotto) {
    return calcMatchCount(this.get(), winningLotto.get());
  }

  checkBonusMatch(bonusNumber) {
    return this.#lotto.some(
      (lottoNumber) => lottoNumber.get() === bonusNumber.get(),
    );
  }

  #parseLotto(lotto) {
    const lottoArr = Array.isArray(lotto) ? lotto : Parser.parseLotto(lotto);
    const encapsuleLottoNumber = lottoArr.map((num) => new LottoNumber(num));

    return encapsuleLottoNumber;
  }

  get() {
    return LottoDto.getResponse(this.#lotto);
  }
}

export default Lotto;
