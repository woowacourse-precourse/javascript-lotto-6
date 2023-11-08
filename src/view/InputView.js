import { Console } from "@woowacourse/mission-utils";

class InputView {
  async readPurchaseAmount() {
    const purchaseAmount = await Console.readLineAsync(
      "구입금액을 입력해 주세요."
    );
    return purchaseAmount;
  }

  async readLottoNumbers() {
    const lottoNumbers = await Console.readLineAsync(
      "당첨 번호를 입력해 주세요."
    );
    return lottoNumbers;
  }

  async readBonusNumber() {
    const bonusNumber = await Console.readLineAsync(
      "보너스 번호를 입력해 주세요."
    );
    return bonusNumber;
  }
}

export default InputView;
