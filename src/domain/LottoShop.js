import Lotto from './Lotto';
import { PRICE, SETTING } from '../constants';
import { generateLottoNumber, calculateNumberMatch, isBonusMatch } from '../utils/calculate';
import { 
  isDivideMinCost, 
  isLottoNumberRange, 
  isNaturalNumber, 
  isNumber, 
  isUnique, 
  isUniqueBonus, 
  hasSixValues 
} from '../utils/validation';

const { bonus_match, min_match } = SETTING;

class LottoShop {
  #income;
  #prizeNumbers;
  #bonusNumber;

  set income(income) {
    isNumber(income);
    isNaturalNumber(income);
    isDivideMinCost(income);
    this.#income = income;
  }

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
    isUniqueBonus(this.#prizeNumbers, bonus);
    this.#bonusNumber = Number(bonus);
  }

  get income() {
    return this.#income;
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

  calculateStat(lottos) {
    const stat = { 3: 0, 4: 0, 5: 0, bonus: 0, 6: 0 };
    lottos.forEach((lotto) => {
      const matchResult = calculateNumberMatch(lotto, this.#prizeNumbers);
      const isMatchedBonus = isBonusMatch(lotto, this.#bonusNumber);
  
      if (isMatchedBonus && matchResult === bonus_match) {
        stat.bonus += 1;
        return;
      }
  
      if (!isMatchedBonus && matchResult >= min_match) {
        stat[matchResult] += 1;
      }
    });
    return stat;
  }

  calculateTotalReturn(lottos) {
    let amount = 0;
    lottos.forEach((lotto) => {
      const matchResult = calculateNumberMatch(lotto, this.#prizeNumbers);
      const isMatchedBonus = isBonusMatch(lotto, this.#bonusNumber);
      
      if (isMatchedBonus && matchResult === bonus_match) {
        amount += PRICE.bonus;
        return;
      }

      if (!isMatchedBonus && matchResult >= min_match) {
        amount += PRICE[matchResult];
      }
    });
    return ((amount / this.#income) * 100).toFixed(1);
  }
}


export default LottoShop;