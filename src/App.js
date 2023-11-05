import { getPurchase } from './utils/getPurchase';
import { getLottoCount } from './utils/getLottoCount';
import { createLotto } from './utils/createLotto';
import { getLottoNumber } from './utils/getLottoNumber';
import { getBonusNumber } from './utils/getBonusNumber';
import { getLottoResult } from './utils/getLottoResult';
import { getRanking, getRankResult } from './utils/getLottoRanking';

class App {
  async play() {
    const cash = await getPurchase();
    const lottoCount = getLottoCount(cash);

    const lottoArray = createLotto(lottoCount);

    const winningLotto = await getLottoNumber();
    const bonus = await getBonusNumber();

    winningLotto.getBonus(bonus);
    const winningCount = getLottoResult(lottoArray, winningLotto);

    const lottoRanking = getRanking(winningCount);
    getRankResult(lottoRanking);
  }
}

export default App;
