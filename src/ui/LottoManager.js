import { Console } from "@woowacourse/mission-utils";
import { LOTTO_PLAY } from "../constants/Messeage.js";
import { showLottoTicket, showStatisticsResult } from "./LottoStamper.js";
import LotteryMachine from "../domain/LotteryMachine.js";
import LottoReader from "../domain/LottoReader.js";
import Lotto from "../Lotto.js";
import Bonus from "../domain/Bonus.js";

class LottoManager {
  #lottoTicket;

  #luckyNumbers;

  #bonusNumber;

  async startLottoSimulator() {
    await this.#getPurchaseAmount();
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
      const lotteryMachine = new LotteryMachine(purchaseAmount);

      this.#lottoTicket = lotteryMachine.getTiket();
      Console.print('');
    } catch (messeage) {
      Console.print(`${messeage}`);
      await this.#getPurchaseAmount();
    }
  }

  async #getLuckyNumbers() {
    try {
      const luckyStrings = await Console.readLineAsync(`${LOTTO_PLAY.inputLucky}\n`);                                        
      const luckNumbers = luckyStrings.split(',').map(Number);

      const lotto = new Lotto(luckNumbers);
      this.#luckyNumbers = lotto.getLuckyNumbers();

      Console.print('');
    } catch (messeage) {
      Console.print(`${messeage}`);
      await this.#getLuckyNumbers();
    }
  }

  async #getBonusNumber() {
    try {
      const bonusString = await Console.readLineAsync(`${LOTTO_PLAY.inputBonus}\n`);

      const bonus = new Bonus(bonusString, this.#luckyNumbers);
      this.#bonusNumber = bonus.getBonusNumber();

      Console.print('');
    } catch (messeage) {
      Console.print(`${messeage}`);
      await this.#getBonusNumber();
    }
  }
}

export default LottoManager;
