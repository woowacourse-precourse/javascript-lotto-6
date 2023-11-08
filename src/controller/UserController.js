import Inputview from "../views/Inputview.js";
import Lotto from "../models/Lotto.js";
import { Random } from "@woowacourse/mission-utils";

class UserController {
  #inputview

  constructor() {
    this.#inputview = new Inputview();
  }

  async getLotto() {
    const count = await this.#inputview.readAmount();
    const winningnumbers = await this.#inputview.readWinningNumbers();
    const bonusNumber = await this.#inputview.readBonusNumber(winningnumbers.getNumbers());
    const lottolist = UserController.generateLottoList(count);
    return { count, lottolist, winningnumbers, bonusNumber};
  }

  static generateLottoNumbers() {
    const lottoNumbers = Random.pickUniqueNumbersInRange(1, 45, 6);
    const lotto = new Lotto(lottoNumbers);
    return lotto.getNumbers();
  }

  static generateLottoList(count) { 
    let lottolist = [];
    for (let i = 0; i < count; i++) {
      lottolist.push(this.generateLottoNumbers());
    }
    return lottolist;
  }

}

export default UserController;