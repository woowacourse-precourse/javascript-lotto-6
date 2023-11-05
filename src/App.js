import {
    INIT_ZERO,
} from './utils/Define';
import {
    generateLotto,
} from './utils/Calculate';
import {
    printLottoNumbers,
} from './io/Output';

class App {
    lottos;
    results;
    purchaseAmount;

    constructor() {
        this.lottos = [];
        this.results = { '3': INIT_ZERO, '4': INIT_ZERO, '5': INIT_ZERO, '5+': INIT_ZERO, '6': INIT_ZERO };
        this.purchaseAmount = INIT_ZERO;
    }
    async play() {
    }

    generateAndPrintLottos(numberOfLottos) {
        for (let i = INIT_ZERO; i < numberOfLottos; i += ONE) {
            const lotto = generateLotto();
            this.lottos.push(lotto);
            printLottoNumbers(lotto);
        }
    }
}

export default App;