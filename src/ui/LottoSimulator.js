import { Console } from "@woowacourse/mission-utils";
import { LOTTO_PLAY } from "../constants/Messeage.js";
import { validatePurchaseAmount, validateBonusNumber } from "../error/Validation.js";
import Lotto from "../Lotto.js";
import { showLottoTicket, showStatisticsResult } from "./output.js";
import LotteryMachine from "../domain/LotteryMachine.js";
import LottoReader from "../domain/LottoReader.js";

class LottoSimulator {
  #purchaseAmount = 0;

  #luckyNumbers = [];

  #bonusNumber = 0;

  #lottoTicket = [];

  async start() {
    await this.#getPurchaseAmount();
    
    const lotteryMachine = new LotteryMachine(this.#purchaseAmount);
    this.#lottoTicket = lotteryMachine.getTiket();

    showLottoTicket(this.#lottoTicket);
 
    await this.#luckyBonusSetting()
  }

  async #luckyBonusSetting() {
    await this.#getLuckyNumbers();
    await this.#getBonusNumber();
    
    this.#lottoResult();
  }

  #lottoResult() {
    const luckyBonusNumbers = this.#luckyNumbers.concat(this.#bonusNumber);
    const lottoReader = new LottoReader(this.#lottoTicket, luckyBonusNumbers);
    
    showStatisticsResult(lottoReader.start());
  }

  async #getPurchaseAmount() {
    try {
      const purchaseAmount = await Console.readLineAsync(`${LOTTO_PLAY.inputAmount}\n`);
      validatePurchaseAmount(purchaseAmount);

      this.#purchaseAmount = Number(purchaseAmount);
      
      Console.print('');

    } catch (messeage) {
      Console.print(`${messeage}`);
      await this.#getPurchaseAmount();
    }
  }

  async #getLuckyNumbers() {
    try {
      const luckyStrings = await Console.readLineAsync(`${LOTTO_PLAY.inputLucky}\n`);
      const luckyNumbers = luckyStrings.split(',').map((string) => Number(string));
                                              
      const lotto = new Lotto(luckyNumbers);//예외처리 부족 인지
      this.#luckyNumbers = lotto.getLuckyNumbers();

      Console.print('');

    } catch (messeage) {
      Console.print(`${messeage}`);
      await this.#getLuckyNumbers();
    }
  }

  async #getBonusNumber() {
    try {
      const bonusNumber = await Console.readLineAsync(`${LOTTO_PLAY.inputBonus}\n`);
      validateBonusNumber(bonusNumber, this.#luckyNumbers);

      this.#bonusNumber = Number(bonusNumber);
      Console.print('');

    } catch (messeage) {
      Console.print(`${messeage}`);
      await this.#getBonusNumber();
    }
  }
}

export default LottoSimulator;