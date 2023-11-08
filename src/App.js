import { MissionUtils } from "@woowacourse/mission-utils";
import getLottoPriceInput from "./components/getLottoPriceInput.js";
import makeLottoNumber from "./components/makeLottoNumber.js";
import printLottoNumber from "./components/printLottoNumbers.js";

class App {
  async play() {
    const priceInput = await getLottoPriceInput();
    MissionUtils.Console.print(`${priceInput}개를 구매했습니다`);
    const lottoNumbers = [];
    for (let index = 0; index < priceInput; index++) {
      const lottoNumber = makeLottoNumber();
      MissionUtils.Console.print(`${printLottoNumber(lottoNumber)}`);
      lottoNumbers.push(lottoNumber);
    }
  }
}

export default App;
