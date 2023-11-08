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

  gameStart(inputMoney) {
    this.validator.validateInputMoney(inputMoney);
    this.inputMoney = Number(inputMoney);
    this.issueLotto();
    this.changePrintFormat();
    this.printLottoNum();
    this.getUserNumber();
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

  getUserNumber() {
    Console.readLine(MESSAGE.INPUT_USER_NUMBER, (userNumber) => {
      this.validator.checkUserNum(userNumber);
      this.userLotto = new Lotto(userNumber.split(',').map(num => Number(num)));
      this.getUserBonusNumber();
    });
  }

  getUserBonusNumber() {
    Console.readLine(MESSAGE.INPUT_USER_BONUS_NUMBER, (bonusNumber) => {
      this.validator.checkUserBonusNum(this.userLotto.getNumbers(), bonusNumber);
      this.bonusNumber = Number(bonusNumber);
      this.gameEnd();
    });
  }

  gameEnd() {
    this.checkLottoResult.checkResult(this.lottos, this.userLotto, this.bonusNumber);
    Console.print(MESSAGE.PRINT_RESULT_TITLE);
    this.printLottoResult();
  }

  printLottoResult() {
    this.checkLottoResult.rankCount.forEach((rankCount, rank) => {
      Console.print(MESSAGE.PRINT_RESULT_RANK.format(
        RANK[rank].MATCHING_COUNT,
        RANK[rank].EXTRA_TEXT,
        RANK[rank].PRIZE,
        rankCount,
      ));
    });
  }

  changePrintFormat() {
    String.prototype.format = function() {
      return [...arguments].reduce((pattern,value) => pattern.replace(/%s/,value), this);
    };
  }
  
}

export default App;
