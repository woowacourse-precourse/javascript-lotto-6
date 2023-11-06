import { Console } from "@woowacourse/mission-utils";
import { LOTTO_PLAY } from "../constants/Messeage.js";
import { validatePurchaseAmount, validateBonusNumber, validateLuckyNumbers } from "../error/Validation.js";
import { showLottoTicket, showStatisticsResult } from "./LottoStamper.js";
import LotteryMachine from "../domain/LotteryMachine.js";
import LottoReader from "../domain/LottoReader.js";

class LottoManager {
  #purchaseAmount = 0;

  #luckyNumbers = [];

  #bonusNumber = 0;

  #lottoTicket = [];

  async startLottoSimulator() {
    await this.#getPurchaseAmount();
    
    const lotteryMachine = new LotteryMachine(this.#purchaseAmount);
    this.#lottoTicket = lotteryMachine.getTiket();
    showLottoTicket(this.#lottoTicket);
 
    await this.#setWinningNumbers();
  }

  async #setWinningNumbers() {
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
      this.#luckyNumbers = validateLuckyNumbers(luckyStrings);

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

export default LottoManager;