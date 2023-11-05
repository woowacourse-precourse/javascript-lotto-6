import { LottoStoreUI } from './LottoStoreUI.js';
import { LottoMachine } from './LottoMachine.js';
import { LottoInput } from './LottoInput.js';

class Main {
  constructor() {
    this.lottoStroreUI = new LottoStoreUI();
    this.lottoInput = new LottoInput();
  }

  start = async () => {
    const numberOfLotto = await this.lottoStroreUI.printPurchasAmount();
    const lottoMachine = new LottoMachine(numberOfLotto);
    const lottoList = await lottoMachine.createLottoNumber();
    const winningNumbers = await this.lottoInput.printWinningNumber();
  };
}

export { Main };
