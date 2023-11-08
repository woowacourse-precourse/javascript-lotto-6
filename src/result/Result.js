import Prizes from './Prizes.js';
import Returns from './Returns.js';
import Lotto from './Lotto.js';
import Raffle from './Raffle.js';
import Utils from '../utils/Utils.js';
import SETTINGS from '../constants/Settings.js';
import ReturnRate from './ReturnRate.js';

export default class Result {
  #lottos;
  #raffle;
  #prizes;
  #returns;
  #returnRate;

  constructor() {
    this.#lottos = [];
    this.#prizes = new Prizes();
    this.#returns = new Returns();
    this.#returnRate = new ReturnRate();
  }

  setResult(lottos, raffle) {
    lottos.forEach(lotto => {
      this.#lottos.push(new Lotto(lotto));
    });
    this.#raffle = new Raffle(raffle['numbers'], raffle['bonus']);
  }

  calculateRanks() {
    this.#lottos.forEach((lotto) => {
      const rank = lotto.getRank(this.#raffle.getNumbers(), this.#raffle.getBonus());
      this.#prizes.addPrize(rank);
    });
  }

  calculateReturns() {
    const prizes = this.#prizes.get();

    this.#returns.add(
      SETTINGS.fifthPrize * prizes['5']
      + SETTINGS.fourthPrize * prizes['4']
      + SETTINGS.thirdPrize * prizes['3']
      + SETTINGS.secondPrize * prizes['2']
      + SETTINGS.firstPrize * prizes['1']
    );
  }

  returnRate() {
    return this.#returnRate.calculate(this.#returns.get(), this.#lottos.length * SETTINGS.lottoPrice);
  }

  prizes() {
    return this.#prizes.get();
  }
}