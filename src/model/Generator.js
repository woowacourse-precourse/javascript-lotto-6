import { LIMITS } from '../constants/fixedValue.js';
import { pickUniqueNumbersInRange } from '../utils/missionUtils.js';
import { ascendingSortNumbers } from '../utils/arrayUtils.js';

class Generator {
  #lottoTicketsByPrice = null;

  constructor(lottoTicketsByPrice) {
    this.#lottoTicketsByPrice = Number(lottoTicketsByPrice);
  }

  #generateSingleLottoNumbers() {
    const randomLottoNumbers = pickUniqueNumbersInRange(
      LIMITS.minRange,
      LIMITS.maxRange,
      LIMITS.count,
    );

    const singleLottoNumbers = ascendingSortNumbers(randomLottoNumbers);

    return singleLottoNumbers;
  }

  calculateLottoTicketsCount() {
    const lottoTicketsCount = this.#lottoTicketsByPrice / LIMITS.priceUnit;
    return lottoTicketsCount;
  }

  generateLottoNumbers() {
    const lottoTicketsCount = this.calculateLottoTicketsCount();

    const lottoNumbers = Array.from({ length: lottoTicketsCount }, () =>
      this.#generateSingleLottoNumbers(),
    );

    return lottoNumbers;
  }
}

export default Generator;
