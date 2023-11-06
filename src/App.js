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

    // 로또 구매결과 출력
    consolePrint.printLottos(lottos);
    // 당첨 번호 입력
    const lotto = await system.getLotto();
    const bonusNumber = await system.getBonusNumber(lotto);
    const winningNumbers = lotto.getNumbers();
    const winningCounts = system.calculateLottoStats(
      lottos,
      winningNumbers,
      bonusNumber
    );
    console.log(winningCounts);
  }
}

export default App;
