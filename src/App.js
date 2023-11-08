import UserInterface from './UserInterface.js';
import LottoGame from './LottoGame.js';

class App {
  async play() {
    try {
      const userInterface = UserInterface();
      const lottoGame = new LottoGame();

      const money = await userInterface.getLottoNumbers();
      lottoGame.purchaseLotto(money);
      const lottoTickets = lottoGame.getLottoTickets();
      userInterface.printLottoNumbers(lottoTickets);

      const winning = await userInterface.getWinningNumbers();
      const bonus = await userInterface.getBonusNumber();
      const count = await lottoGame.compareLotto(winning, bonus);
      await userInterface.printResult(count);
      const profit = await lottoGame.calculateProfitRate(count, money);
      await userInterface.printProfitRate(profit);
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

export default App;
