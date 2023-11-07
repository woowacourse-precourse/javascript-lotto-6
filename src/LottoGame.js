import { Console, Random } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';
import GameManager from './GameManager.js';

class LottoGame {
  money;

  numberOfLotto;

  purchasedTicket = [];

  constructor() {}

  async gameStart() {
    await this.getUserMoney();
    this.buyLottoTicket();
    this.printPurchasedTicket();
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
}

export default LottoGame;
