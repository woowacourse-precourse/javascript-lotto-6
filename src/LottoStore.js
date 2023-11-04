import { MissionUtils } from "@woowacourse/mission-utils";
import Validator from "./Validate.js";
import WinLotto from "./WinLotto.js";

class LottoStore {
  static #WINNINGNUM_INPUT = "당첨 번호를 입력해 주세요.";
  static #BONUSNUM_INPUT = "보너스 번호를 입력해 주세요.";

  static async askWinningNum() {
    MissionUtils.Console.print(LottoStore.#WINNINGNUM_INPUT);
    const userInputWinningNum = await MissionUtils.Console.readLineAsync("");
    const winningNum = userInputWinningNum.split(",");
    Validator.validateInputMoney(winningNum);

    return winningNum;
  }

  static async askBonusNum() {
    MissionUtils.Console.print(LottoStore.#BONUSNUM_INPUT);
    const bonusNum = await MissionUtils.Console.readLineAsync("");
    Validator.validateInputMoney(bonusNum);

    return bonusNum;
  }

  static async calculateWinningResults(lottoTickets) {
    const resultWinNum = await LottoStore.askWinningNum();
    const resultBonusNum = await LottoStore.askBonusNum();
    const winLotto = new WinLotto(resultWinNum, resultBonusNum, lottoTickets);
    return winLotto.compareNumbers();
  }
}
export default LottoStore;
