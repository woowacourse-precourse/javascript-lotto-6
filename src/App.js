import { Console } from '@woowacourse/mission-utils';
import InputView from './InputView.js';
import Machine from './LottoMachine.js';
import LottoGenerator from './LottoGenerator.js';
import Lotto from './Lotto.js';
import LottoResultCalculator from './Output.js';

class App {
  async play() {
    const inputview = new InputView();
    const machine = new Machine();
    const lottoGerner = new LottoGenerator();

    await inputview.inputAmountOfMoney(); // await를 사용하여 결과를 처리
    const playerLotto = inputview.playerMoney; // playerMoney를 사용
    const amountLotto = machine.CalculatorOfLottoAmount(playerLotto);
    Console.print(`${amountLotto}개를 구매했습니다.`);
    const purchase = lottoGerner.purchaseLotto(amountLotto);

    const inputNumber = await inputview.inputWinningNumber();
    const winningNumber = inputview.stringToNumberArray(inputNumber);
    const lotto = new Lotto(winningNumber);
    const bonusNumber = await inputview.inputBonusNumber();

    const results = LottoResultCalculator.calculateResults(purchase, winningNumber, bonusNumber);

    for (const resultKey in results) {
      const result = results[resultKey];
      if (resultKey === '총 수익률') {
        Console.print(`${resultKey}은 ${result}입니다.`);
      } else if (resultKey !== '0') {
        Console.print(`${resultKey} - ${result}개`);
      }
    }
  }
}

const app = new App();
app.play();

export default App;
