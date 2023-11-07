import { Console } from "@woowacourse/mission-utils";

export default class InputView {
  async readLottoPrice() {
    const lottoPrice = await Console.readLineAsync("구입금액을 입력해 주세요.\n");
    return Number(lottoPrice);
  }

  async readWinningNumberArray() {
    const winningNumberArray = await Console.readLineAsync(
      "\n당첨 번호를 입력해 주세요.\n"
    );
    return winningNumberArray.split(",").map(e=>Number(e))
  }

  async readBonusNumber() {
    const bonusNumber = await Console.readLineAsync("\n보너스 번호를 입력해 주세요.\n")
    return Number(bonusNumber)
  }

}
