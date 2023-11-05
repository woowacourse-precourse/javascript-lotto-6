import { getPurchase } from "./utils/getPurchase";
import { getLottoCount } from "./utils/getLottoCount";
import { createLotto } from "./utils/createLotto";
import { getLottoNumber } from "./utils/getLottoNumber";

class App {
  async play() {
    const cash = await getPurchase();
    const lottoCount = getLottoCount(cash);

    createLotto(lottoCount);
    const lotto = await getLottoNumber();
  }
}

export default App;