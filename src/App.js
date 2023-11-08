import { Console } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";
import { Input } from "./utils/Input.js";
import { BuyLotto } from "./utils/BuyLotto.js";
import { BonusLotto } from "./utils/BonusLotto.js";
import { Print } from "./utils/Print.js";
import GetRrandomList from "./utils/getRrandomList.js";
import ReturnRate from "./utils/ReturnRate.js";
import CheckWinning from "./utils/CheckWinning.js";
class App {
  buyLotto;
  winning;
  bonus;
  lotto;

  constructor() {
    this.Input = new Input();
    this.printValue = new Print();
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
      this.buyLotto = await this.Input.buyLotto();
      new BuyLotto(this.buyLotto);
    } catch (error) {
      Console.print(error.message);
      await this.inputBuyMoney();
    }
  }

  // 발행 로또 출력
  outputLottoTicket() {
    const lottoQuantity = this.buyLotto / 1000;
    this.lotto = GetRrandomList(lottoQuantity);
    this.printValue.lottoIssuedQuantity(lottoQuantity, this.lotto);
  }

  // 당첨 로또 번호 입력
  async inputWinningNumber() {
    try {
      this.winning = await this.Input.winningNumber();
      new Lotto(this.winning);
    } catch (error) {
      Console.print(error.message);
      await this.inputWinningNumber();
    }
  }

  // 보너스 로또 번호 입력
  async inputBonusNumber() {
    try {
      this.bonus = await this.Input.bonusNumber();
      new BonusLotto(this.bonus, this.winning);
    } catch (error) {
      Console.print(error.message);
      await this.inputBonusNumber();
    }
  }

  // 당첨 내역 출력
  outputResult() {
    const winningList = CheckWinning(this.winning, this.bonus, this.lotto);
    const roi = ReturnRate(this.buyLotto, winningList);
    this.printValue.winningResult(winningList, roi);
  }
}

export default App;
