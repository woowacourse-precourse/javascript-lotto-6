import { Console } from "@woowacourse/mission-utils";
import { INPUT_MESSAGE } from "../constants/InputMessages";

export default class InputView {
  async readLottoPrice() {
    const lottoPrice = await Console.readLineAsync(INPUT_MESSAGE.priceformat);
    return Number(lottoPrice);
  }

  async readWinningNumberArray() {
    const winningNumberArray = await Console.readLineAsync(
      INPUT_MESSAGE.lottoformat
    );
    return winningNumberArray.split(",").map(e=>Number(e))
  }

  async readBonusNumber() {
    const bonusNumber = await Console.readLineAsync(INPUT_MESSAGE.bonusformat)
    return Number(bonusNumber)
  }

}
