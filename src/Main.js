import { LottoStoreUI } from './LottoStoreUI.js';
import { LottoMachine } from './LottoMachine.js';
import { LottoInput } from './LottoInput.js';
import { BonusInput } from './BonusInput.js';
import { LottoEvaluatorUI } from './LottoEvaluatorUI.js';

class Main {
  constructor() {
    this.lottoStoreUI = new LottoStoreUI();
    this.lottoInput = new LottoInput();
    this.bonusInput = new BonusInput();
  }

  start = async () => {
    const numberOfLotto = await this.lottoStoreUI.printPurchasAmount();
    const lottoMachine = new LottoMachine(numberOfLotto);
    const lottoList = await lottoMachine.createLottoNumber();
    const winningNumbers = await this.lottoInput.printWinningNumber();
    const bonus = new BonusInput(winningNumbers);
    const bonusNumber = await bonus.printBonusNumber();
    const evaluator = new LottoEvaluatorUI(
      lottoList,
      winningNumbers,
      bonusNumber,
      numberOfLotto
    );
    await evaluator.printStatistics();
  };
}

export { Main };
