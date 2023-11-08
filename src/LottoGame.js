import { Console, Random } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';
import GameManager from './GameManager.js';
import { ERROR_MESSAGE, MESSAGE, TICKET_UNIT } from './Constant.js';
import CheckValid from './CheckValid.js';

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
    await this.setBonusNumber();
    this.getRankResult();
  }

  async getUserMoney() {
    while (true) {
      try {
        const inputMoney = await Console.readLineAsync(MESSAGE.INPUT_MONEY);
        CheckValid.checkMoney(inputMoney);
        this.money = inputMoney;
        this.numberOfLotto = Number(this.money) / TICKET_UNIT;
        break;
      } catch (error) {
        Console.print(`${error.message}`);
      }
    }
  }

  buyLottoTicket() {
    Console.print(`\n${this.numberOfLotto}개를 구매했습니다.`);
    for (let i = 0; i < Number(this.numberOfLotto); i++) {
      const lotto = new Lotto(GameManager.getRandomNumber());
      this.purchasedTicket.push(lotto);
    }
  }

  printPurchasedTicket() {
    this.purchasedTicket.forEach((lotto) => lotto.printLotto());
  }

  async setWinNumber() {
    while (true) {
      try {
        const winNumberArray = await Console.readLineAsync(MESSAGE.INPUT_WIN);
        CheckValid.checkWinNumber(winNumberArray);
        this.winNumbers = GameManager.splitWinNumber(winNumberArray);
        break;
      } catch (error) {
        Console.print(`${error.message}`);
      }
    }
  }

  async setBonusNumber() {
    while (true) {
      try {
        const bonus = await Console.readLineAsync(MESSAGE.INPUT_BONUS);
        CheckValid.checkBonusNumber(bonus, this.winNumbers);
        this.bonusNumber = Number(bonus);
        break;
      } catch (error) {
        Console.print(`${error.message}`);
      }
    }
  }

  getRankResult() {
    Console.print(MESSAGE.MATCH_RESULT);
    const earn = GameManager.checkResult(
      this.purchasedTicket,
      this.winNumbers,
      this.bonusNumber
    );
    GameManager.calculateProfit(earn, this.money);
  }
}

export default LottoGame;
