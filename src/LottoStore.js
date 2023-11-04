import { MissionUtils } from "@woowacourse/mission-utils";
import Validator from "./Validate.js";
import WinLotto from "./WinLotto.js";

class LottoStore {
  static #WINNINGNUM_INPUT = "당첨 번호를 입력해 주세요.";
  static #BONUSNUM_INPUT = "보너스 번호를 입력해 주세요.";

  static async askWinningNum() {
    MissionUtils.Console.print(LottoStore.#WINNINGNUM_INPUT);
    const winningNum = await MissionUtils.Console.readLineAsync("");
    Validator.validateWinningNumbers(winningNum);
    const winningNums = winningNum.split(",");

    return winningNums;
  }

  static async askBonusNum() {
    MissionUtils.Console.print(LottoStore.#BONUSNUM_INPUT);
    const bonusNum = await MissionUtils.Console.readLineAsync("");
    Validator.validateBonusNumber(bonusNum);

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
