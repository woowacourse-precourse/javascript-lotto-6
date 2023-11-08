/* eslint-disable import/extensions */
/* eslint-disable class-methods-use-this */
import { MissionUtils } from '@woowacourse/mission-utils';
import Input from './Input.js';
import PurchasedLotto from './PurchasedLotto.js';
import IssuedLotto from './IssuedLotto.js';
import Lotto from './Lotto.js';

class App {
  async play() {
    try {
      const input = new Input();
      const issuedLottos = await this.buyAndIssueLottos(input);
      const winningLotto = await this.getWinningLotto(input);
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
    const winningLottoNumbers = await input.inputChangeToArr('당첨번호를 입력해주세요\n');
    return winningLottoNumbers;
  }

  async getWinningLotto(input) {
    const winningLottoNumbers = await this.getWinningNumbersFromUser(input);
    const winningLotto = new Lotto(winningLottoNumbers);
    return winningLotto;
  }
}

export default App;
