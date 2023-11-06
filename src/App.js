import Money from "./Money";
import System from "./System";
import ConsolePrint from "./views/ConsolePrint";

class App {
  async play() {
    const moneyInstance = new Money();
    await moneyInstance.initialize();
    const money = moneyInstance.getMoney();

    const system = new System();

    const consolePrint = new ConsolePrint();
    const lottoCount = await moneyInstance.getLottoCount();

    const lottos = await system.purchaseLottos(lottoCount);
    consolePrint.printLottos(lottos);
    const lotto = await system.getLotto();
    const bonusNumber = await system.getBonusNumber(lotto);
  }
}

export default App;
