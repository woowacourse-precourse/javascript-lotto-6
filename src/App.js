import System from "./System";
import ConsolePrint from "./views/ConsolePrint";

class App {
  async play() {
    const system = new System();
    const consolePrint = new ConsolePrint();
    const money = await system.getMoney();
    const lottoCount = await system.getLottoCount(money);

    const lottos = await system.purchaseLottos(lottoCount);
    consolePrint.printLottos(lottos);
    const [lottoNumbers, lotto] = await system.getLotto();
    const [bonusNumber, lottoNumbersSet] = await system.getBonusNumber(lotto);
  }
}

export default App;
