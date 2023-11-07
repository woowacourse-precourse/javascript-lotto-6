import { Console, Random } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';
import GameManager from './GameManager.js';

class LottoGame {
  money;

  numberOfLotto;

  purchasedTicket = [];

  winNumbers;

  bonusNumber;

  constructor() {}

  async gameStart() {
    await this.getUserMoney();
    this.buyLottoTicket();
    this.printPurchasedTicket();
    await this.setWinNumber();
    console.log(this.winNumbers);
    await this.setBonusNumber();
    this.getRankResult();
  }

  async getUserMoney() {
    this.money = await Console.readLineAsync('구입금액을 입력해 주세요.\n');
    this.numberOfLotto = Number(this.money) / 1000;
  }

  buyLottoTicket() {
    Console.print(`\n${this.numberOfLotto}개 구매했습니다.`);
    for (let i = 0; i < Number(this.numberOfLotto); i++) {
      const lotto = new Lotto(GameManager.getRandomNumber());
      this.purchasedTicket.push(lotto);
    }
  }

  printPurchasedTicket() {
    this.purchasedTicket.forEach((lotto) => lotto.printLotto());
  }

  async setWinNumber() {
    const winNumberArray = await Console.readLineAsync(
      '\n당첨 번호를 입력해 주세요.\n'
    );
    this.winNumbers = GameManager.splitWinNumber(winNumberArray);
  }

  async setBonusNumber() {
    const bonus = await Console.readLineAsync('\n보너스 번호를 입력해주세요\n');
    this.bonusNumber = Number(bonus);
  }

  getRankResult() {
    Console.print('\n당첨 통계\n---');
    const earn = GameManager.checkResult(
      this.purchasedTicket,
      this.winNumbers,
      this.bonusNumber
    );
    GameManager.calculateProfit(earn, this.money);
  }
}

export default LottoGame;
