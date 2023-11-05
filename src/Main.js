import { LottoStoreUI } from './LottoStoreUI.js';

class Main {
  constructor() {
    this.lottoStroreUI = new LottoStoreUI();
  }

  start = async () => {
    const numberOfLotto = await this.lottoStroreUI.printPurchasAmount();
  };
}

export { Main };
