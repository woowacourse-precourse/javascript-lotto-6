import { LottoStoreUI } from './LottoStoreUI.js';
import { LottoMachine } from './LottoMachine.js';

class Main {
  constructor() {
    this.lottoStroreUI = new LottoStoreUI();
  }

  start = async () => {
    const numberOfLotto = await this.lottoStroreUI.printPurchasAmount();
    const lottoMachine = new LottoMachine(numberOfLotto);
    await lottoMachine.createLottoNumber();
  };
}

export { Main };
