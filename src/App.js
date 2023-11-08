import {Game} from "./Game.js"
import {WinningNumbers} from "./inputBonusNumber.js";
import {BonusNumber} from "./getBounsNumber.js";
import {
  Console,
} from "@woowacourse/mission-utils";
import { validate } from "./validation.js";

class App {
  constructor() {
    this.game;
    this.winningNumbers;
    this.bonusNumber;
  }

  async play() {
    await this.inputPurchaseAmount();
  }

  async inputPurchaseAmount() {
    let input;
    try{
      input = await Console.readLineAsync("구입금액을 입력해 주세요.\n");
      validate.moneyInput(input);
    } catch(error){
        Console.print(error.message);
        return await this.inputPurchaseAmount();
    }
    this.game = new Game(input);
    this.game.quantityOfPurchase();
    this.game.printWinningNumberList();
    this.inputWinningNumber();
  }

  async inputWinningNumber() {
    let input;
    try {
      input = await Console.readLineAsync("\n당첨 번호를 입력해 주세요.\n");
      input = input.split(",").map((el) => Number(el));
      validate.winningNumbers(input);
    } catch (error){
      Console.print(error.message);
      return await this.inputWinningNumber();
    }
      this.winningNumbers = new WinningNumbers(input);
      this.inputBonusNumber();
  }

  async inputBonusNumber() {
    let input;
    try{
      input = await Console.readLineAsync("\n보너스 번호를 입력해 주세요.\n");
      input = Number(input);
      validate.bonusNumber(input, this.winningNumbers.value);
    } catch(error) {
      Console.print(error.message);
      return await this.inputBonusNumber();
    }
      this.bonusNumber = new BonusNumber(input, this.winningNumbers.value);
      this.printResult();
  }

  printResult() {
    Console.print("\n당첨 통계\n---");
    const result = this.game.getLottoResult(
      this.winningNumbers.value,
      this.bonusNumber.value
    );
    this.game.printWinningHistory(result);
    this.game.getResultRate(result);
  }
}

export default App;