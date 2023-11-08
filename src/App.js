import { Console } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';
import User from './User.js';
import Input from './views/Input.js';
import Output from './views/Output.js';

class App {
  constructor() {
    this.user;
    this.lotto;
  }

  /**
   * 1. 유저의 구매금액 입력 및 유저 생성
   * 2. 금액에 해당하는 갯수의 랜덤숫자 출력
   * 3. 로또 번호 입력 및 로또 생성
   * 4. 로또 결과 생성
   * 5. 로또 통계 결과 출력
   */
  async play() {
    await this.userInputController();
    this.userNumbersOutputController();

    await this.lottoInputController();
    this.resultController();
    this.resultOutputController();
  }

  async userInputController() {
    try {
      const purchaseAmount = await Input.readPurchaseAmout();
      this.user = new User(purchaseAmount);
    } catch (error) {
      Console.print(error.message);

      await this.userInputController();
    }
  }

  userNumbersOutputController() {
    const userNumbersToString = this.user.userNumbersList.map((numbers) =>
      numbers.join(', ')
    );

    Output.printUserNumbers(this.user.purchaseNumber, userNumbersToString);
  }

  async lottoInputController() {
    try {
      const lottoNumber = await Input.readLottoNumber();
      const bonusNumber = await Input.readBonusNumber();

      this.lotto = new Lotto(lottoNumber, bonusNumber);
    } catch (error) {
      Console.print(error.message);

      await this.lottoInputController();
    }
  }

  resultController() {
    this.user.userNumbersList.map((userNumbers) => {
      const { lottoCount, isBonus } = this.lotto.getResult(userNumbers);
      this.user.setResult(lottoCount, isBonus);
      this.user.setProfit(lottoCount, isBonus);
    });

    this.user.setYeild();
  }

  resultOutputController() {
    Output.printLottoResult(this.user.results);
    Output.printYeild(this.user.yeild);
  }
}

export default App;
