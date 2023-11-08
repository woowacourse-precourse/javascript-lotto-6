import { Console } from '@woowacourse/mission-utils';
import { MESSAGE, RANK } from './constant.js';
import Validator from './Validator.js';
import GenerateRandomNum from './GenerateRandomNum.js';
import Lotto from './Lotto.js';
import CheckLottoResult from './CheckLottoResult.js';

class App {
  inputMoney;
  lottos;
  userLotto;
  bonusNumber;

  constructor() {
    this.lottos = [];
    this.validator = new Validator();
    this.checkLottoResult = new CheckLottoResult();
  }

  async play() {
    Console.readLine(MESSAGE.INPUT_MONEY, this.gameStart.bind(this));
  }

  async gameStart(inputMoney) {
    try {
      this.validator.validateInputMoney(inputMoney);
      this.inputMoney = Number(inputMoney);
      this.issueLotto();
      this.changePrintFormat();
      this.printLottoNum();
      this.getUserNumber();
    } catch (error) {
      Console.print(error.message);
      return await this.play();
    }
  }

  issueLotto() {
    const generateRandomNum = new GenerateRandomNum();
    for (let countLotto = 0; countLotto < (this.inputMoney / 1000); countLotto++) {
      this.lottos.push(new Lotto(generateRandomNum.generateNum()));
    }
  }

  printLottoNum() {
    Console.print(MESSAGE.PRINT_ISSUE_LOTTOS.format(this.lottos.length));
    this.lottos.forEach(lotto => lotto.print());
  }

  async getUserNumber() {
    Console.readLine(MESSAGE.INPUT_USER_NUMBER, async (userNumber) => {
      try {
        this.validator.checkUserNum(userNumber);
        this.userLotto = new Lotto(userNumber.split(',').map(num => Number(num)));
        this.getUserBonusNumber();
      } catch (error) {
        Console.print(error.message);
        return await this.getUserNumber();
      }
    });
  }

  async getUserBonusNumber() {
    Console.readLine(MESSAGE.INPUT_USER_BONUS_NUMBER, async (bonusNumber) => {
      try {
        this.validator.checkUserBonusNum(this.userLotto.getNumbers(), bonusNumber);
        this.bonusNumber = Number(bonusNumber);
        this.gameEnd();
      } catch (error) {
        Console.print(error.message);
        return await this.getUserBonusNumber();
      }
    });
  }

  gameEnd() {
    this.checkLottoResult.checkResult(this.lottos, this.userLotto, this.bonusNumber);
    Console.print(MESSAGE.PRINT_RESULT_TITLE);
    this.printLottoResult();
    this.printLottoRate();
  }

  printLottoResult() {
    this.checkLottoResult.rankCount.forEach((rankCount, rank) => {
      Console.print(MESSAGE.PRINT_RESULT_RANK.format(
        RANK[rank].MATCHING_COUNT,
        RANK[rank].EXTRA_TEXT,
        this.addCommasToNumber(RANK[rank].PRIZE),
        rankCount,
      ));
    });
  }

  printLottoRate() {
    Console.print(MESSAGE.PRINT_RATE.format(
      this.checkLottoResult.returnRate(this.inputMoney)
    ))
  }

  // 출력 형식
  changePrintFormat() {
    String.prototype.format = function () {
      return [...arguments].reduce((pattern, value) => pattern.replace(/%s/, value), this);
    };
  }

  addCommasToNumber(money) {
    return money.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
}

export default App;
