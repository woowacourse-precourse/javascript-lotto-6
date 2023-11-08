import { Console } from "@woowacourse/mission-utils";
import { MESSAGE, RANK } from "./libs/Constant.js";
import Validation from "./libs/Validation.js";
import Lotto from "./Lotto.js";
import GetLottoResult from "./GetLottoResult.js";
import RandomNumbers from "./RandomNumbers.js";

class App {
  inputMoney;
  lottos;
  userLotto;
  bonusNumber;

  constructor() {
    this.lottos = [];
    this.validation = new Validation();
    this.getLottoResult = new GetLottoResult();
  }

  async play() {
    Console.readLineAsync(MESSAGE.INPUT_MONEY, this.gameStart.bind(this));
  }

  async gameStart(inputMoney) {
    try {
      this.validation.validateInputMoney(inputMoney);
      this.inputMoney = Number(inputMoney);
      this.isRightLotto();
      this.changePrintFormat();
      this.printLotto();
      this.getUserNumber();
    } catch (error) {
      Console.print(error.message);
      return await this.play();
    }
  }

  isRightLotto() {
    const generateNumbers = new RandomNumbers();
    for (let num = 0; num < this.inputMoney / 1000; num++) {
      this.lottos.push(new Lotto(generateNumbers.generateNumbers()));
    }
  }

  printLotto() {
    Console.print(MESSAGE.PRINT_ISSUE_LOTTOS.format(this.lottos.length));
    this.lottos.forEach((lotto) => lotto.print());
  }

  async getUserNumber() {
    Console.readLineAsync(MESSAGE.INPUT_USER_NUMBER, async (userNumber) => {
      try {
        this.validator.checkUserNumber(userNumber);
        this.userLotto = new Lotto(
          userNumber.split(",").map((num) => Number(num))
        );
        this.getUserBonusNumber();
      } catch (error) {
        Console.print(error.message);
        return await this.getUserNumber();
      }
    });
  }

  async getUserBonusNumber() {
    Console.readLineAsync(
      MESSAGE.INPUT_USER_BONUS_NUMBER,
      async (bonusNumber) => {
        try {
          this.validator.checkUserBonusNumber(
            this.userLotto.getNumbers(),
            bonusNumber
          );
          this.bonusNumber = Number(bonusNumber);
          this.gameEnd();
        } catch (error) {
          Console.print(error.message);
          return await this.getUserBonusNumber();
        }
      }
    );
  }

  gameEnd() {
    this.getLottoResult.checkResult(
      this.lottos,
      this.userLotto,
      this.bonusNumber
    );
    Console.print(MESSAGE.PRINT_RESULT_TITLE);
    this.printLottoReesult();
    this.printLottoRate();
  }

  printLottoResult() {
    this.getLottoResult.count.forEach((count, rank) => {
      Console.print(
        MESSAGE.PRINT_RESULT_RANK.format(
          RANK[rank].MATCHING_COUNT,
          RANK[rank].EXTRA_TEXT,
          this.addCommasToNumber(RANK[rank].PRIZE),
          count
        )
      );
    });
  }

  printLottoRate() {
    Console.print(
      MESSAGE.PRINT_RATE.format(this.getLottoResult.returnRate(this.inputMoney))
    );
  }

  changePrintFormat() {
    String.prototype.format = function () {
      return [...arguments].reduce(
        (pattern, value) => pattern.replace(/%s/, value),
        this
      );
    };
  }

  addCommasToNumber(money) {
    return money.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
}

export default App;
