import Computer from './Computer.js';

class App {
  async play() {
    const computer = new Computer();

    await computer.getPurchaseAmountFromUserInput();
    computer.issueLottoForPurchaseAmount();
    computer.printLotto();

    await computer.getWinningNumbersrFromUserInput();
    await computer.getBonusNumberFromUserInput();

    computer.printLottoWinningStatistics();
    computer.printTotalRateOfReturn();

    computer.resetLotto();
  }
}

export default App;
