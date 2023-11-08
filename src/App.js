import Lotto from "./Lotto.js";
import Inoutput from "./Inoutput.js";
import Functions from "./Functions.js";

class App {
  async play() {
    const functions = new Functions();

    // 금액을 입력 받아 로또 구매
    const amount = await Inoutput.buyLotto();
    const lottoList = functions.buyLottoByAmount(amount);
   const winningNumbers = await Inoutput.getWinningNumber();
   const bounsNumber = await Inoutput.getBounsNumber(winningNumbers);
   functions.lottoStart(lottoList,winningNumbers,bounsNumber,amount);
   
   
  }
}

export default App;
