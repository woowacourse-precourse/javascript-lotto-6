/* eslint-disable import/extensions */
/* eslint-disable class-methods-use-this */
import { MissionUtils } from '@woowacourse/mission-utils';
import Input from './Input.js';
import PurchasedLotto from './PurchasedLotto.js';
import IssuedLotto from './IssuedLotto.js';
import Lotto from './Lotto.js';
import BonusBall from './BonusBall.js';

class App {
  async play() {
    try {
      const input = new Input();
      const issuedLottos = await this.buyAndIssueLottos(input);
      const winningLotto = await this.getWinningLotto(input);
      const bonusBall = await this.getBonusBall(input);
    } catch (err) {
      throw new Error(`[ERROR] ${err}`);
    }
  }

  async getCashFromUser(input) {
    const cash = await input.simpleInput('금액을 입력해주세요\n');
    return cash;
  }

  async issuedLotto(cash) {
    const purchasedLotto = new PurchasedLotto(cash);
    const numOfPurchasedLotto = purchasedLotto.numOfPurchasedLotto();
    const issuedLotto = new IssuedLotto(numOfPurchasedLotto);
    return issuedLotto.lottoIssuance();
  }

  printIssuedLottos(lottos) {
    const message = `${lottos.length}개를 구매했습니다.`;
    MissionUtils.Console.print(message);
    lottos.forEach((lotto) => MissionUtils.Console.print(lotto));
  }

  async buyAndIssueLottos(input) {
    const cash = await this.getCashFromUser(input);
    const returnLotto = await this.issueLottos(cash);
    this.printIssuedLottos(returnLotto);
    return returnLotto;
  }

  async getWinningNumbersFromUser(input) {
    const winningLottoNumbers = await input.inputChangeToArr('\n당첨번호를 입력해주세요\n');
    return winningLottoNumbers;
  }

  async getWinningLotto(input) {
    const winningLottoNumbers = await this.getWinningNumbersFromUser(input);
    const winningLotto = new Lotto(winningLottoNumbers);
    return winningLotto;
  }

  async getBonusBallFromUser(input) {
    const bonusBall = await input.inputChangeToArr('\n보너스 번호를 입력해주세요\n');
    return bonusBall;
  }

  async getBonusBall(input) {
    const inputBonusBall = await this.getBonusBallFromUser(input);
    const bonusBall = new BonusBall(inputBonusBall);
    return bonusBall.getBonusBall();
  }
}

export default App;
