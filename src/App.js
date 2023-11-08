import * as Result from './Result.js';

class App {
    async play() {
        const lottoPay = await Result.inputLottoPay();
        Result.validateLottoPay(lottoPay);

        const lottos = Result.lottoGenerate(lottoPay / 1000);
        Result.printLottoNumbers(lottos);

        const winLotto = await Result.winLottoGenerate();

        const rankMap = Result.runCalculate(lottos, winLotto);
        Result.printStatistics(lottoPay, rankMap);
    }
}

export default App;