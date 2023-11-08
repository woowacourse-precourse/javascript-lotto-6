import {lottoInput,lottoOutput} from './io/InputOutput';
import randomLottoGenerator from './utils/randomLottoGenerator';
import winningNumberToArray from './utils/WinningNumberToArray';
import {checkMoneyNumber, checkMoneyUnit} from './error/MoneyError';
import Lotto from './Lotto';
class App {
  async play() {   
    let lottos = [];
    
    const money = lottoInput.readMoney();
    checkMoneyNumber(money);
    checkMoneyUnit(money);
    const tickets = money /1000;
    printLine();
    printPurchase(tickets);
    for(let i = 0; i < tickets; i++) {
      lottos.push(new Lotto(randomLottoGenerator));
    }
    printLine();
    const winningNumber = lottoInput.readWinningNumber();
    winningNumbers = winningNumberToArray(winningNumber);
    const winningLotto = new Lotto(winningNumbers);



  }
}

export default App;
