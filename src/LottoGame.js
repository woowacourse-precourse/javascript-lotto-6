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
      Console.print(err);
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
      Console.print(err);
    }
    
  }

  async inputMoney() {
      const moneyInput = await Console.readLineAsync("구입금액을 입력해 주세요.\n");
      this.#money = new Money(moneyInput);
  }

  
}

export default LottoGame;