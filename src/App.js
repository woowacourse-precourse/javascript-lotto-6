import {lottoInput,lottoOutput} from './io/InputOutput';
import randomLottoGenerator from './utils/RandomLottoGenerator';
import compareForResult from './utils/CompareForResult';
import calculateRate from './utils/CalculateRate';
import winningNumberToArray from './utils/WinningNumberToArray';
import checkMoney from './error/MoneyError';
import Lotto from './Lotto';
import checkWinningNumber from './error/WinningNumberError';
import checkBonus from './error/BonusError';
class App {
  async play() {   
    let lottos = [];
    
    const money = lottoInput.readMoney();
    checkMoney(money);
    const tickets = money /1000;
    printLine();
    printPurchase(tickets);
    for(let i = 0; i < tickets; i++) {
      lottos.push(new Lotto(randomLottoGenerator));
    }
    printLine();
    const winningNumber = lottoInput.readWinningNumber();
    const winningNumbers = winningNumberToArray(winningNumber);
    checkWinningNumber(winningNumbers);
    const winningLotto = new Lotto(winningNumbers);
    printLine(); 
    const bonus = lottoInput.readBonusNumber();
    checkBonus(bonus);
    printLine();
    lottoInput.printResultHeader();
    const winningList = compareForResult(winningNumbers,bonus,lottos);
    lottoOutput.printWinningList(winningList);
    const rate = calculateRate(money,winningList);
    lottoOutput.printResultRate(rate);











  }
}

export default App;
