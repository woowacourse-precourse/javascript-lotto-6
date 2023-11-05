import { Console } from "@woowacourse/mission-utils";

export default class InputView {
  async readLottoPrice() {
    const lottoPrice = await Console.readLineAsync("구입금액을 입력해 주세요.");
    return lottoPrice;
  }

  async readWinningNumberArray() {
    const winningNumberArray = await Console.readLineAsync(
      "당첨 번호를 입력해 주세요."
    );
    return winningNumberArray
  }

  async readBonusNumber() {
    const bonusNumber = await Console.readLineAsync("보너스 번호를 입력해 주세요.")
    return bonusNumber
  }
}
