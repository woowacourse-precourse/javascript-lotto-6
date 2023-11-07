import WinNumber from "./WinNumber.js";
import LottoData from "./LottoData.js";
import Result from "./Result.js";
import Lotto from "./Lotto.js";

class App {
  async play() {
    const lottoData = new LottoData();
    const winNumber = new WinNumber();

    await lottoData.inputPurchaseAmount();
    lottoData.printLottoCount();
    lottoData.iterRandomLottoAndSave();

    await winNumber.inputWinNumber();
    await winNumber.inputBonusNumber();

    const result = new Result();
    result.printStaticsMessage();

    lottoData.getLottoData().forEach((lottoNumbers) => {
      const lotto = new Lotto(lottoNumbers);
      result.countMatchingNumbers(
        lotto.checkLottoNumbers(
          winNumber.getWinNumber(),
          winNumber.getBonusNumber()
        )
      );
    });

    result.printResult();
    result.printRateOfReturn(
      lottoData.getLottoPurchaseAmount(),
      result.getWinningAmount()
    );
  }
}

export default App;
