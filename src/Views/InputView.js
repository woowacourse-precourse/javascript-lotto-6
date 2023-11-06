import { Console } from "@woowacourse/mission-utils";

class InputView {
  async getBuyMoneyInput() {
    const userMoneyInput = await Console.readLineAsync(
      "구입금액을 입력해 주세요.\n"
    );
    const userMoneyNumber = Number(userMoneyInput);

    // TODO 1000원 단위예외 체크

    return userMoneyNumber;
  }

  async getTargetLottoInfoInput() {
    // TODO 6자리 중복 체크 및 보너스 번호 중복 체크
    const targetLottoInput = await Console.readLineAsync(
      "당첨 번호를 입력해 주세요.\n"
    );
    const targetNumberList = targetLottoInput.split(",").map(Number);

    const targetBonusInput = await Console.readLineAsync(
      "보너스 번호를 입력해 주세요\n"
    );
    const targetBonusNumber = Number(targetBonusInput);

    return { targetNumberList, targetBonusNumber };
  }
}

export default InputView;
