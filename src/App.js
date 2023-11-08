import { MissionUtils } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";
import getLottoPriceInput from "./components/getLottoPriceInput.js";
import makeLottoNumber from "./components/makeLottoNumber.js";
import printLottoNumber from "./components/printLottoNumbers.js";
import getLottoNumberInput from "./components/getLottoNumberInput.js";
import getBounsNumberInput from "./components/getBonusNumberInput.js";
import calcResult from "./components/calcResult.js";
import printResult from "./components/printResult.js";

class App {
  async play() {
    const priceInput = await getLottoPriceInput();
    MissionUtils.Console.print(`${priceInput}개를 구매했습니다.`);
    const lottoNumbers = [];
    // 로또 번호 생성 및 출력
    for (let index = 0; index < priceInput; index++) {
      const lottoNumber = makeLottoNumber();
      MissionUtils.Console.print(`${printLottoNumber(lottoNumber)}`);
      lottoNumbers.push(lottoNumber);
    }
    // 로또 당첨 번호 인풋 받기
    MissionUtils.Console.print(``);
    const inputLottoNumber = await getLottoNumberInput();
    const inputBonusNumber = await getBounsNumberInput();
    const winningNumber = new Lotto(inputLottoNumber, inputBonusNumber);
    const resultArray = calcResult(winningNumber, lottoNumbers);
    printResult(resultArray, priceInput);
  }
}

export default App;
