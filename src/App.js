import { printMessage, readLineAsync } from './utils/message';
import { MATCH, MESSAGE, PRICE, SETTING } from './constants';
import LottoShop from './domain/LottoShop';

class App {
  #lottoShop = new LottoShop();
  
  async play() {
    const cost = await this.payLottoCost();
    const lottos = this.getLotto(cost);
    this.printLotto(lottos);
    await this.setPrizeNumber();
    await this.setBonusNumber();
    this.printMatchResult(lottos);
    this.printTotalReturn(lottos);
  }

  async payLottoCost() {
    try {
      const cost = await readLineAsync(MESSAGE.input_cost);
      this.#lottoShop.income = Number(cost);
      return cost;
    } catch (error) {
      printMessage(error.message);
      await this.payLottoCost();
    }
  }

  getLotto(cost) {
    const ticket = Number(cost) / SETTING.lotto_cost;
    return this.#lottoShop.createLotto(ticket);
  }

  printLotto(lottos) {
    printMessage(`${lottos.length}${MESSAGE.sell}`);
    lottos.forEach((lotto) => {
      const formatedLotto = lotto.join(', ');
      printMessage(`[${formatedLotto}]`);
    });
  }

  async setPrizeNumber() {
    try {
      const prize = await readLineAsync(MESSAGE.input_prize);
      this.#lottoShop.prizeNumber = prize.split(',').map((v) => v.trim());
    } catch (error) {
      printMessage(error.message);
      await this.setPrizeNumber();
    }
  }

  async setBonusNumber() {
    try {
      const bonus = await readLineAsync(MESSAGE.input_bonus);
      this.#lottoShop.bonusNumber = bonus.trim();
    } catch (error) {
      printMessage(error.message);
      await this.setBonusNumber();
    }
  }

  printMatchResult(lottos) {
    const stat = this.#lottoShop.calculateStat(lottos);
    printMessage(MESSAGE.prize_stats);
    printMessage(MESSAGE.line);
    Object.keys(stat).forEach((key) => {
      if (key === SETTING.bonus) {
        const price = PRICE.bonus.toLocaleString();
        printMessage(MATCH.bonus_match(price, stat[key]));
        return;
      }
      const price = PRICE[key].toLocaleString();
      printMessage(MATCH.normal_match(key, price, stat[key]));
    });
  }
  
  printTotalReturn(lottos) {
    const totalReturn = this.#lottoShop.calculateTotalReturn(lottos);
    printMessage(MESSAGE.total_return(totalReturn));
  }
}

export default App;
