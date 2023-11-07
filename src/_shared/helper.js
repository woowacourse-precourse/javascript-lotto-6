import Util from './util.js';
import { LottoRule } from '../models/rule.js';

class Helper {
  static generateLotto() {
    const numberSet = new Set();

    while (numberSet.size < 6) {
      numberSet.add(Util.randomNumber(LottoRule.MinNumber, LottoRule.MaxNumber));
    }

    return Util.toAscendingArray(Array.from(numberSet));
  }
}

export default Helper;
