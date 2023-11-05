import { LottoStoreUI } from './LottoStoreUI.js';

class Main {
  constructor() {
    this.lottoStroreUI = new LottoStoreUI();
  }

  start = async () => {
    await this.lottoStroreUI.printPurchasAmount();
  };
}

export { Main };
