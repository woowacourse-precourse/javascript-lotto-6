import UserInput from "./UserInput.js";

class App {
  async play() {
    const userInput = new UserInput();
    const money = await userInput.getInputMoney();
    const winningNumbers = await userInput.getInputWinningNumbers();
    const bonusNumber = await userInput.getInputBonusNumber();
  }
}

export default App;
