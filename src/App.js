import { getPurchase } from './utils/getPurchase';
import { getLottoCount } from './utils/getLottoCount';
import { createLotto } from './utils/createLotto';
import { getLottoNumber } from './utils/getLottoNumber';
import { getBonusNumber } from './utils/getBonusNumber';

class App {
  async play() {
    const cash = await getPurchase();
    const lottoCount = getLottoCount(cash);

    createLotto(lottoCount);

    const lotto = await getLottoNumber();
    const bonus = await getBonusNumber();
    lotto.getBonus(bonus);
  }
}

export default App;
