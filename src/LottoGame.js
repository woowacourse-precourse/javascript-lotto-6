import { CONFIG } from '../constants/constants';
import { Console, Random } from '@woowacourse/mission-utils';
import Lotto from './Lotto';
import Player from './Player';
import WinningBonus from './WinningBonus';

class LottoGame {
  #tickets = [];
  #results = {
    '3개 일치 (5,000원)': 0,
    '4개 일치 (50,000원)': 0,
    '5개 일치 (1,500,000원)': 0,
    '5개 일치, 보너스 볼 일치 (30,000,000원)': 0,
    '6개 일치 (2,000,000,000원)': 0,
  };

  async run() {
    await this.inputPrice();
  }

  async inputPrice() {
    const price = await new Player().readPrice();

    this.buyLotto(price);
  }

  async buyLotto(price) {
    for (let i = 0; i < price / 1000; i += 1) {
      const lottoNumber = this.#generateRandomLottoNumbers();
      const lotto = new Lotto(lottoNumber);
      lotto.displayBoard();
      this.#tickets.push(lotto.getLottoNumbers());
    }
    this.inputWinningBonus();
  }

  async inputWinningBonus() {
    const winningBonus = new WinningBonus();
    const winningNumber = await winningBonus.readWinning();
    const bonusNumber = await winningBonus.readBonus();

    this.checkLottos(winningNumber, bonusNumber);
  }

  checkLottos(winningNumber, bonusNumber) {
    this.#tickets.forEach((ticket) => {
      const result = this.checkLotto(ticket, winningNumber, bonusNumber);
      this.#results[result] += 1;
    });

    for (const [prize, count] of Object.entries(this.#results)) {
      if (prize !== 'undefined') {
        console.log(`${prize} - ${count}개`);
      }
    }

    this.calculateTotal();
  }

  calculateTotal() {
    const totalPrize =
      this.#results['3개 일치 (5,000원)'] * CONFIG.prize['5등'] +
      this.#results['4개 일치 (50,000원)'] * CONFIG.prize['4등'] +
      this.#results['5개 일치 (1,500,000원)'] * CONFIG.prize['3등'] +
      this.#results['5개 일치, 보너스 볼 일치 (30,000,000원)'] *
        CONFIG.prize['2등'] +
      this.#results['6개 일치 (2,000,000,000원)'] * CONFIG.prize['1등'];
    const totalInvestment = this.#tickets.length * CONFIG.price;
    const profitPercentage = ((totalPrize / totalInvestment) * 100).toFixed(1);

    Console.print(`총 수익률은 ${profitPercentage}%입니다.`);
  }

  checkLotto(ticket, winningNumber, bonusNumber) {
    const matchingNumbers = ticket.filter((num) =>
      winningNumber.includes(num),
    ).length;

    if (matchingNumbers === 6) {
      if (ticket.includes(bonusNumber)) {
        return '5개 일치, 보너스 볼 일치 (30,000,000원)';
      }
      return '6개 일치 (2,000,000,000원)';
    }
    if (matchingNumbers === 5) return '5개 일치 (1,500,000원)';
    if (matchingNumbers === 4) return '4개 일치 (50,000원)';
    if (matchingNumbers === 3) return '3개 일치 (5,000원)';
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
