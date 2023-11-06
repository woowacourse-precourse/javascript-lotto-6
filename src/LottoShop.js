import Lotto from './Lotto';
import { 
  generateLottoNumber, 
  hasSixValues, 
  isLottoNumberRange, 
  isNaturalNumber, 
  isNumber, 
  isUnique, 
  isUniqueBonus 
} from './utils';

class LottoShop {
  #prizeNumbers;
  #bonusNumber;

  set prizeNumber(prize) {
    hasSixValues(prize);
    prize.forEach((num) => {
      isNumber(num);
      isNaturalNumber(num);
      isLottoNumberRange(num);
    });
    isUnique(prize);
    this.#prizeNumbers = prize.map(Number);
  }

  set bonusNumber(bonus) {
    isNumber(bonus);
    isNaturalNumber(bonus);
    isLottoNumberRange(bonus);
    isUniqueBonus(bonus);
    this.#bonusNumber = Number(bonus);
  }

  get prizeNumber() {
    return this.#prizeNumbers;
  }

  get bonusNumber() {
    return this.#bonusNumber;
  }

  createLotto(tickets) {
    const lottos = [];
    while (lottos.length < tickets) {
      const lottoNumbers = generateLottoNumber().sort((a, b) => a - b);
      const lotto = new Lotto(lottoNumbers);
      lottos.push([...lotto.numbers]);
    };
    return lottos;
  }
}

export default LottoShop;