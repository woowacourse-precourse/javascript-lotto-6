import GameProgress from "./GameProgress";
import GetInputValue from "./GetInputValue";

class App {
  async play(){
		const purchaseAmount =  await GameProgress.getPurchaseCount();
    const purchaseCount = Number(purchaseAmount)/1000;
    const purchaseLotto = GameProgress.printPurchaseLotto(purchaseCount);
    
    const winningNumbers = await GetInputValue.getWinningNumbers();
    const bonusNumber = await GetInputValue.getBonusNumber();

    GameProgress.getWinningStatistics(purchaseLotto, winningNumbers, bonusNumber);
    GameProgress.printWinningStatistics();
    const winningMoney = GameProgress.getWinningMoney();
    const rateOfReturn = GameProgress.getRateOfReturn(purchaseAmount, winningMoney);
    GameProgress.printRateOfReturn(rateOfReturn);
		return ;
  }
}

export default App;
