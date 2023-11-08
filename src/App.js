import { InputView } from '../Views/InputView.js';
import { OutputView } from '../Views/OutputView.js';
import { Lotto } from './Lotto.js';
import { generateLottoTickets, checkResults } from './lottoLogic.js';

class App {
    async play() {
        try {
            const purchaseAmount = await InputView.price();
            const lottoCount = Math.floor(purchaseAmount / 1000);
            OutputView.count(lottoCount);

            const userLottoNumbers = generateLottoTickets(lottoCount);
            OutputView.makeLottos(userLottoNumbers);

            const winningNumbers = await InputView.wining();
            const bonusNumber = await InputView.bonus();

            const results = checkResults(userLottoNumbers, winningNumbers, bonusNumber);
            OutputView.result(results);

            const profitRate = calculateProfitRate(purchaseAmount, results);
            OutputView.profit(profitRate);
        } catch (error) {
            OutputView.err(`[ERROR] ${error.message}`);
        }
    }
}

export default App;
