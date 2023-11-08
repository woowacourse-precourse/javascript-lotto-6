import {
  LOTTO_PRICE,
  LOTTO_MIN_NUMBER,
  LOTTO_MAX_NUMBER,
  LOTTO_NUMBERS_LENGTH,
} from '../Constant/Constants.js';
import { generateRandomNumbers } from '../Util/Utils.js';
import Lotto from '../Lotto.js';

class LottoGenerator {
  generateLottos(purchaseAmount) {
    const lottos = [];
    const numberOfLottos = this.getNumberOfLottos(purchaseAmount);
    for (let i = 0; i < numberOfLottos; i++) {
      const lottoNumbers = this.generateLottoNumbers();
      lottos.push(this.generateLotto(lottoNumbers));
    }
    return lottos;
  }

  generateLotto(lottoNumbers) {
    return new Lotto(lottoNumbers);
  }

  getNumberOfLottos(purchaseAmount) {
    return purchaseAmount / LOTTO_PRICE;
  }

  generateLottoNumbers() {
    const numbers = generateRandomNumbers(
      LOTTO_MIN_NUMBER,
      LOTTO_MAX_NUMBER,
      LOTTO_NUMBERS_LENGTH
    );
    numbers.sort((a, b) => a - b);
    return numbers;
  }
}

export default LottoGenerator;
