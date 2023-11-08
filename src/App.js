import {lottoInput,lottoOutput} from './io/InputOutput';
import randomLottoGenerator from './utils/randomLottoGenerator';
import {checkMoneyNumber, checkMoneyUnit} from './error/MoneyError';
import Lotto from './Lotto';
class App {
  async play() {
    let money;
    let tickets;
    let lottos = [];

    money = lottoInput.readMoney();
    checkMoneyNumber(money);
    checkMoneyUnit(money);
    tickets = money /1000;
    printLine();
    printPurchase(tickets);
    for(let i = 0; i < tickets; i++) {
      lottos.push(new Lotto(randomLottoGenerator));
    }
    printLine();
    


  }
}

export default App;
