import { DrawnLotto } from "../Models/index.js";
import { InputView, OutputView } from "../Views/index.js";

export default class DrawnLottoController {
  static async createDrawnLotto() {
    const drawnLottoWithoutBonusNumber = await this.#promptDrawnLottoNumbers();
    const drawnLotto = await this.#promptBonusNumber(
      drawnLottoWithoutBonusNumber
    );
    return drawnLotto;
  }

  static async #promptDrawnLottoNumbers() {
    let drawnLottoWithoutBonusNumber;
    while (true) {
      try {
        const inputdrawnLottoNumbers =
          await InputView.promptForDrawnLottoNumbers();
        drawnLottoWithoutBonusNumber = new DrawnLotto(inputdrawnLottoNumbers);
        break;
      } catch (error) {
        OutputView.print(error.message);
      }
    }
    return drawnLottoWithoutBonusNumber;
  }

  static async #promptBonusNumber(drawnLottoWithOutBonusNumber) {
    let drawnLotto;
    while (true) {
      try {
        const inputbonusNumber = await InputView.promptForBonusNumber();
        drawnLottoWithOutBonusNumber.setBonusNumber(inputbonusNumber);
        drawnLotto = drawnLottoWithOutBonusNumber;
        break;
      } catch (error) {
        OutputView.print(error.message);
      }
    }
    return drawnLotto;
  }
}
