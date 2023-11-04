import { LottoStore } from './LottoStore.js';

class Main {
  constructor() {
    this.lottoStore = new LottoStore();
  }

  start = async () => {
    await this.lottoStore.printPurchasingAmout();
  };
}

export { Main };
