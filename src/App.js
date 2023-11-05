import {
    INIT_ZERO,
} from './utils/Define';
class App {
    lottos;
    results;
    purchaseAmount;

    constructor() {
        this.lottos = [];
        this.results = { '3': INIT_ZERO, '4': INIT_ZERO, '5': INIT_ZERO, '5+': INIT_ZERO, '6': INIT_ZERO };
        this.purchaseAmount = INIT_ZERO;
    }
  async play() {}
}

export default App;