import { Console } from '@woowacourse/mission-utils';
import InputView from './InputView.js';
import Machine from './LottoMachine.js';
import LottoGenerator from './LottoGenerator.js';
import Lotto from './Lotto.js';
import LottoResultCalculator from './LottoMachine.js';
import OutputView from './OutputView.js';

const inputview = new InputView();
const machine = new Machine();
const lottoGerner = new LottoGenerator();
const outputView = new OutputView();
class App {
  async play() {
    while (true) {
      try {
        await inputview.AmountOfMoney();
        break;
      } catch (error) {
        Console.print(error.message);
      }
    }

    const amountLotto = machine.CalculatorOfLottoAmount(inputview.playerMoney);
    const purchase = lottoGerner.purchaseLotto(amountLotto);

    let inputLottoNumber = 0;
    while (true) {
      try {
        inputLottoNumber = await inputview.WinningNumber();
        break;
      } catch (error) {
        Console.print(error.message);
      }
    }

    const winningNumber = inputview.toNumberArray(inputLottoNumber);
    const lotto = new Lotto(winningNumber);
    while (true) {
      try {
        await inputview.BonusNumber();
        break;
      } catch (error) {
        Console.print(error.message);
      }
    }

    const results = LottoResultCalculator.calculateResults(purchase, winningNumber, inputview.bonusNumber);
    outputView.printResult(results);
  }
}

const app = new App();
app.play();

export default App;
