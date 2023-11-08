import * as lottoUtil from './lottoUtil.js';

class App {
    async play() {
        const lottoPay = await lottoUtil.inputLottoPay();
        lottoUtil.validateLottoPay(lottoPay);

        const lottos = lottoUtil.lottoGenerate(lottoPay / 1000);
        lottoUtil.printLottoNumbers(lottos);

        const winLotto = await lottoUtil.winLottoGenerate();

        const rankMap = lottoUtil.runCalculate(lottos, winLotto);
        lottoUtil.printStatistics(lottoPay, rankMap);
    }
}

export default App;