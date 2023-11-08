import {
    INIT_ZERO,
    ONE,
    LOTTO_PRICE,
    ERROR,
    MATCH,
} from './utils/Define';
import {
    generateLotto,
    calculateMatchCount,
} from './utils/Calculate';
import {
    printLottoNumbers,
    printNumberOfLottos,
    displayGameResults,
} from './io/Output';
import {
    inputPurchaseAmountAsync,
    inputWinningNumbersAsync,
} from './io/Input';
import { Console } from '@woowacourse/mission-utils';
import { checkBonus } from './utils/Validation';

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
            const winningNumbers = await inputWinningNumbersAsync();
            this.evaluateLottos(winningNumbers);
            displayGameResults(this.results, this.purchaseAmount);
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

    updateResults(matchCount, hasBonus) {
        if (matchCount < 3) {
            return;
        }
        if (matchCount === MATCH.FIVE && hasBonus) {
            this.results[MATCH.FIVE_BONUS] += 1;
            return;
        }
        if (this.results.hasOwnProperty(matchCount)) {
            this.results[matchCount] += 1;
        }
    }

    evaluateLottos({ winningNumbers, bonusNumber }) {
        this.lottos.forEach(lotto => {
            const matchCount = calculateMatchCount(lotto, winningNumbers);
            const hasBonus = checkBonus(lotto, bonusNumber);
            this.updateResults(matchCount, hasBonus);
        });
    }
}

export default App;