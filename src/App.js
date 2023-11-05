import {
    INIT_ZERO,
    ONE,
    LOTTO_PRICE,
    ERROR,
} from './utils/Define';
import {
    generateLotto,
} from './utils/Calculate';
import {
    printLottoNumbers,
    printNumberOfLottos,
} from './io/Output';
import {
    inputPurchaseAmountAsync, 
} from './io/Input';
import { Console } from '@woowacourse/mission-utils';
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
        try {
            await this.setupGame();
        } catch (error) {
            Console.print(`${ERROR.HEAD} ${error.message}`);
        }
    }

    generateAndPrintLottos(numberOfLottos) {
        for (let i = INIT_ZERO; i < numberOfLottos; i += ONE) {
            const lotto = generateLotto();
            this.lottos.push(lotto);
            printLottoNumbers(lotto);
        }
    }

    purchaseLottos() {
        const numberOfLottos = this.purchaseAmount / LOTTO_PRICE;
        printNumberOfLottos(numberOfLottos);
        this.generateAndPrintLottos(numberOfLottos);
    }

    async setupGame() {
        this.purchaseAmount = await inputPurchaseAmountAsync();
        this.purchaseLottos();
    }
}

export default App;