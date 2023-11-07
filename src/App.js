import { PICK_NUMBERS, ONE_LOTTO_PRICE } from "./constants/lottoNumbers.js";
import { MODE } from "./constants/mode.js";
import { Random, Console } from "@woowacourse/mission-utils";
import { Input } from "./Input.js";

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
    this.#money = await this.untilValueAvailable(this.#money, MODE.MONEY);

    this.#winningNumbers = await this.untilValueAvailable(
      this.#winningNumbers,
      MODE.WINNING_NUMBERS
    );

    this.#bonusNumber = await this.untilValueAvailable(
      this.#bonusNumber,
      MODE.BONUS_NUMBER,
      this.#winningNumbers
    );
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

export default App;
