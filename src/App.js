import { Console } from '@woowacourse/mission-utils';
import { MESSAGE } from './constant.js';
import Validator from './Validator.js';
import GenerateRandomNum from './GenerateRandomNum.js';
import Lotto from './Lotto.js';

class App {
  inputMoney;
  lottos;
  userLotto;

  constructor() {
    this.lottos = [];
    this.validator = new Validator();
  }

  async play() {
    Console.readLine(MESSAGE.INPUT_MONEY, this.gameStart.bind(this));
  }

  gameStart(inputMoney) {
    this.validator.validateInputMoney(inputMoney);
    this.inputMoney = Number(inputMoney);
    this.issueLotto();
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
    Console.print(`\n${this.lottos.length}${MESSAGE.PRINT_ISSUE_LOTTOS}`);
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
    });
  }
}

export default App;
