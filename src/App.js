import { PICK_NUMBERS, ONE_LOTTO_PRICE } from "./constants/lottoNumbers.js";
import { MODE } from "./constants/mode.js";
import { Random, Console } from "@woowacourse/mission-utils";
import { Input } from "./Input.js";
import { Output } from "./Output.js";
import Lotto from "./Lotto.js";

class App {
  #money;
  #winningNumbers;
  #bonusNumber;

  constructor() {
    this.lottoBoard = {
      threeSame: 0,
      fourSame: 0,
      fiveSame: 0,
      fiveAndBonusSame: 0,
      sixSame: 0,
      rateOfReturn: 0,
    };
    this.totalReward = 0;
  }

  async play() {
    const output = new Output();
    this.#money = await this.untilValueAvailable(this.#money, MODE.MONEY);
    const lottos = this.makeLotto(this.#money);

    output.printHowManyLotto(this.#money);
    output.printMyLotto(lottos);

    this.#winningNumbers = await this.untilValueAvailable(
      this.#winningNumbers,
      MODE.WINNING_NUMBERS
    );
    const lottoGame = new Lotto(this.#winningNumbers);
    this.#bonusNumber = await this.untilValueAvailable(
      this.#bonusNumber,
      MODE.BONUS_NUMBER,
      this.#winningNumbers
    );

    lottos.forEach((lotto) => {
      const compareResult = lottoGame.compareLottos(lotto, this.#bonusNumber);
      lottoGame.saveCompareResult(compareResult, this.lottoBoard);
    });

    this.totalReward += lottoGame.calculateReward(
      this.lottoBoard,
      this.totalReward
    );
    this.lottoBoard.rateOfReturn = lottoGame.calculateRateOfReturn(
      this.totalReward,
      this.#money
    );

    output.printFinalResult(this.lottoBoard);
  }

  makeLotto(money) {
    const howManyLotto = money / ONE_LOTTO_PRICE;
    const lottos = [];

    for (let i = 0; i < howManyLotto; i++) {
      lottos.push(
        Random.pickUniqueNumbersInRange(
          PICK_NUMBERS.START_RANGE,
          PICK_NUMBERS.END_RANGE,
          PICK_NUMBERS.HOW_MANY
        ).sort((a, b) => a - b)
      );
    }

    return lottos;
  }

  async assignValue(mode, winningNumbers) {
    const input = new Input();
    let temp = "";

    if (mode === MODE.MONEY) {
      temp = await input.getMoney();
      input.validateMoney(temp);
      temp = input.convertToNumber(temp);
      return temp;
    } else if (mode === MODE.WINNING_NUMBERS) {
      temp = await input.getWinningNumbers();
      input.validateWinningNumbers(temp);
      temp = input.convertToArray(temp);
      return temp;
    } else if (mode === MODE.BONUS_NUMBER) {
      temp = await input.getBonusNumber();
      input.validateBonusNumber(temp, winningNumbers);
      temp = input.convertToNumber(temp);
      return temp;
    }
  }

  async untilValueAvailable(value, mode, winningNumbers) {
    while (!value) {
      try {
        value = await this.assignValue(mode, winningNumbers);
        return value;
      } catch (e) {
        Console.print(e.message + "\n");
      }
    }
  }
}

const app = new App();
app.play();
export default App;
