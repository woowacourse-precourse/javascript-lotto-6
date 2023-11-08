import {lottoInput,lottoOutput} from './io/InputOutput';
import randomLottoGenerator from './utils/randomLottoGenerator';
import compareForResult from './utils/CompareForResult';
import calculateRate from './utils/CalculateRate';
import checkMoney from './error/MoneyError';
import Lotto from './Lotto';
import checkWinningNumber from './error/WinningNumberError';
import checkBonus from './error/BonusError';
import { Console } from '@woowacourse/mission-utils';
class App {
  async play() {   
    let lottos = [];
    let money;
    let winningNumber;
    let winningNumbers;
    let bonus;
    while(true) {
      try {
        money = await lottoInput.readMoney();
        checkMoney(money);
        break;        
      } catch(e) {
        Console.print(e.message);
      }
    }    
    const tickets = money / 1000;
    lottoOutput.printLine();
    lottoOutput.printPurchase(tickets);    
    for(let i = 0; i < tickets; i++) {
      lottos.push(new Lotto(randomLottoGenerator()).numbers);
    }        
    lottoOutput.printLine();
    while(true) {
      try {
        winningNumber = await lottoInput.readWinningNumber();
        winningNumbers = checkWinningNumber(winningNumber);
        break;  
      } catch(e) {
        Console.print(e.message);
      }
    }     
    lottoOutput.printLine();
    while(true) {
      try {
        bonus = await lottoInput.readBonusNumber();
        checkBonus(bonus);
        break;  
      } catch(e) {
        Console.print(e.message);
      }
    }    
    lottoOutput.printLine();
    lottoOutput.printResultHeader();
    const winningList = compareForResult(winningNumbers,bonus,lottos);
    lottoOutput.printWinningList(winningList);
    const rate = calculateRate(money,winningList);
    lottoOutput.printResultRate(rate);
  }
}

export default App;
