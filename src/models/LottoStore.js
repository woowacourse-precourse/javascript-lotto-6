import createLottoNumbers from '../utils/createLottoNumbers.js';
import Lotto from './Lotto.js';

class LottoStore {
  constructor(purchasedAmount) {
    this.purchasedAmount = purchasedAmount;
  }

  createLottoTickets() {
    const lottos = Array.from({ length: this.purchasedAmount }, () => {
      const randomNumbers = createLottoNumbers();
      const sortedRandomNumbers = randomNumbers.sort((a, b) => a - b);
      return new Lotto(sortedRandomNumbers);
    });

    return lottos;
  }
}

export default LottoStore;
