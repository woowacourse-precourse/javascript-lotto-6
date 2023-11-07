import { MissionUtils } from "@woowacourse/mission-utils";
const { Console } = MissionUtils;
import InputManager from "./InputManager.js";
import LottoPurchaser from "./LottoPurchaser.js";

class App {
  async play() {
    const price = await InputManager.inputPrice();
    const generatedLottoNumbers = LottoPurchaser.lottoList(price);

    for (const lottoTicket of generatedLottoNumbers) {
      Console.print(lottoTicket);
    }

    const winningNumbers = await InputManager.getWinningNumbers();
    const bonusNumber = await InputManager.getBonusNumbers();
  }
}

export default App;
