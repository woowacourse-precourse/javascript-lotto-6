import Store from "./Store.js";

class App {
  async play() {
    const store = new Store();
    await store.receivePayment();
    store.issueLotto();
    const winningNumbersMap = new Map();
    const winningNumbers = await store.inputWinningNumbers(winningNumbersMap);
    const bonusNumber = await store.inputBonusNumber(winningNumbersMap);
    const rankCountMap = store.calculateRankStatistics(
      winningNumbers,
      bonusNumber
    );
    store.printLottoResult(rankCountMap);
  }
}

export default App;
