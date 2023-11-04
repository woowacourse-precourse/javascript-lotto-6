import UserInput from "./UserInput.js";

class App {
  async play() {
    const lottoAmount = await UserInput.inputAmount();
    const bonusNumber = await UserInput.inputBonus();
  }
}

export default App;
