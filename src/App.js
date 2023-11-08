import { Console } from '@woowacourse/mission-utils';
import { InputValue } from './InputValue.js';
import Lotto from './Lotto.js';
import { BuyLotto } from './BuyLotto.js';
import { BonusLotto } from './BonusLotto.js';
import { PrintValue } from './PrintValue.js';
import LottoIssuance from './LottoIssuance.js';
import CheckWinning from './CheckWinning.js';
import ReturnOnInvestment from './ReturnOnInvestment.js';

class App {
  buyLotto;
  winning;
  bonus;
  lotto;

  constructor() {
    this.inputValue = new InputValue();
    this.printValue = new PrintValue();
  }

  async play() {
    await this.inputBuyMoney();
    this.outputLottoTicket();
    await this.inputWinningNumber();
    await this.inputBonusNumber();
    this.outputResult();
  }

  // 로또 구입 금액 입력
  async inputBuyMoney() {
    try {
      this.buyLotto = await this.inputValue.buyLotto();
      new BuyLotto(this.buyLotto);
    } catch (error) {
      Console.print(error.message);
      await this.inputBuyMoney();
    }
  }

  // 발행 로또 출력
  outputLottoTicket() {
    const lottoQuantity = this.buyLotto / 1000;
    this.lotto = LottoIssuance(lottoQuantity);
    this.printValue.lottoIssuedQuantity(lottoQuantity, this.lotto);
  }

  // 당첨 로또 번호 입력
  async inputWinningNumber() {
    try {
      this.winning = await this.inputValue.winningNumber();
      new Lotto(this.winning);
    } catch (error) {
      Console.print(error.message);
      await this.inputWinningNumber();
    }
  }

  // 보너스 로또 번호 입력
  async inputBonusNumber() {
    try {
      this.bonus = await this.inputValue.bonusNumber();
      new BonusLotto(this.bonus, this.winning);
    } catch (error) {
      Console.print(error.message);
      await this.inputBonusNumber();
    }
  }

  // 당첨 내역 출력
  outputResult() {
    const winningList = CheckWinning(this.winning, this.bonus, this.lotto);
    const roi = ReturnOnInvestment(this.buyLotto, winningList);
    this.printValue.winningResult(winningList, roi);
  }
}

export default App;
