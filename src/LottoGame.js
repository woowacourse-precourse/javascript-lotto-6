import { Console } from '@woowacourse/mission-utils';
import Money from './model/Money.js';
import Lotto from './Lotto.js';
import randomLottogenerator from './utils/randomLottoGenerator.js';
import BonusLotto from './model/BonusLotto.js';
import { getTotalProfit, judgeLotto, judgeResult } from './services/prizeService.js';
import { resultPrint } from './view/output.js';

class LottoGame {
  #money;

  #ticketCount;

  #lottoTickets;

  #lottoTicketsValues;

  #answerLotto;

  #bonusLotto;

  #result;

  async reInput(func) {
    try {
      return await func();
    } catch (err) {
      Console.print('[ERROR]');
      return await this.reInput(func);
    }
  }

  async gameStart() {
    try { 
      await this.reInput(() => this.inputMoney());
      await this.countTicket();
      await this.buyLotto();
      await this.printLottoTickets();
      await this.reInput(() => this.inputAnswerLotto());
      await this.reInput(() => this.inputBonusLotto());
      await this.matchLotto(this.#lottoTicketsValues, this.#answerLotto, this.#bonusLotto, this.#money.getResult());
      this.printTotalProfitRate();
    } catch (err) {
      Console.print('[ERROR]');
    }
    
  }

  async inputMoney() {
      const moneyInput = await Console.readLineAsync("구입금액을 입력해 주세요.\n");
      this.#money = new Money(moneyInput);
  }

  async countTicket() {
    this.#ticketCount = await this.#money.getMoney() / 1000;
    Console.print(`${this.#ticketCount}개를 구매했습니다.`);
  }

  async buyLotto() {
    const lottoTickets = [];
    const lottoTicketsValues = [];
    for (let i = 0; i < this.#ticketCount; i++) {
      const lotto = randomLottogenerator();
      const sortedLotto = lotto.sort((a, b) => a - b);
      lottoTicketsValues.push(sortedLotto);
      const lottoObject = new Lotto(sortedLotto);
      lottoTickets.push(lottoObject);
    }
    this.#lottoTickets = lottoTickets;
    this.#lottoTicketsValues = lottoTicketsValues;
  }

  async printLottoTickets() {
    this.#lottoTickets.forEach((lotto) => {
      const lottoNumbers = lotto.getNumbersString();
      Console.print(`[${lottoNumbers}]`);
    })
  }

  async inputAnswerLotto() {
    const answerLotto = await Console.readLineAsync("\n당첨 번호를 입력해주세요.\n");
    const answerLottoArray = answerLotto.split(',').map((item) => Number(item.trim()));
    this.#answerLotto = new Lotto(answerLottoArray);
  }

  async inputBonusLotto() {
    const bonusLotto = await Console.readLineAsync("\n보너스 번호를 입력해 주세요.\n");
    const answerLotto = this.#answerLotto.getNumbers();
    this.#bonusLotto = new BonusLotto(bonusLotto, answerLotto);
  }

  async getLottoTickets() {
    return this.#lottoTickets;
  }

  
}

export default LottoGame;