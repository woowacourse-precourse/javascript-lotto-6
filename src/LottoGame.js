import { CONFIG, PRINT_MESSAGE } from '../constants/constants';
import { Console, Random } from '@woowacourse/mission-utils';
import Lotto from './Lotto';
import Player from './Player';
import WinningBonus from './WinningBonus';

class LottoGame {
  #tickets = [];
  #results = new Array(CONFIG.jackpotLength).fill(0);

  async run() {
    await this.#inputPrice();
  }

  async #inputPrice() {
    const price = await new Player().readPrice();

    await this.#buyLotto(price);
  }

  async #buyLotto(price) {
    for (let i = 0; i < price / CONFIG.price; i += 1) {
      const lottoNumber = this.#generateRandomLottoNumbers();
      const lotto = new Lotto(lottoNumber);
      Console.print(`[${lotto.getLottoNumbers().join(', ')}]`);

      this.#tickets.push(lotto.getLottoNumbers());
    }
    await this.#inputWinningBonus();
  }

  async #inputWinningBonus() {
    const winningBonus = new WinningBonus();
    const winningNumber = await winningBonus.readWinning();
    const bonusNumber = await winningBonus.readBonus();

    await this.#checkLottos(winningNumber, bonusNumber);
  }

  async #checkLottos(winningNumber, bonusNumber) {
    this.#tickets.forEach((ticket) => {
      const result = this.#checkLotto(ticket, winningNumber, bonusNumber);
      this.#results[result] += 1;
    });

    Console.print(PRINT_MESSAGE.jackpot);
    for (let i = 0; i < this.#results.length; i++) {
      Console.print(`${PRINT_MESSAGE.prize[i]}${this.#results[i]}개`);
    }

    await this.#calculateTotal();
  }

  async #calculateTotal() {
    const totalPrize = this.#results.reduce(
      (acc, cur, i) => acc + cur * CONFIG.prize[i],
      0,
    );

    const totalInvestment = this.#tickets.length * CONFIG.price;
    const profitPercentage = ((totalPrize / totalInvestment) * 100).toFixed(1);

    Console.print(`총 수익률은 ${profitPercentage}%입니다.`);
  }

  #checkLotto(ticket, winningNumber, bonusNumber) {
    const matchingNumbers = ticket.filter((num) =>
      winningNumber.includes(num),
    ).length;

    if (matchingNumbers === CONFIG.rank['1등, 2등']) {
      return ticket.includes(bonusNumber) ? 3 : 4;
    }
    if (matchingNumbers === CONFIG.rank['3등']) return 2;
    if (matchingNumbers === CONFIG.rank['4등']) return 1;
    if (matchingNumbers === CONFIG.rank['5등']) return 0;
  }

  #generateRandomLottoNumbers() {
    return Random.pickUniqueNumbersInRange(
      CONFIG.range.minNumber,
      CONFIG.range.maxNumber,
      CONFIG.lottoLength,
    );
  }
}

export default LottoGame;
