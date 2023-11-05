import Input from "./Input.js";
import Output from "./Output.js";
class App {
  async play() {
    try {
      const purchaseAmount = await Input.getPurchaseAmount();
      const lottos = this.generateLottos(purchaseAmount);
      Output.printLottos(lottos);

      const winningNumbers = await Input.getWinningNumbers();
      const bonusNumber = await Input.getBonusNumber();
      const result = this.calculateResult(lottos, winningNumbers, bonusNumber, purchaseAmount);
      Output.printResult(result, purchaseAmount);
    } catch (error) {
      console.error(error.message);
    }
  }
}
export default App;