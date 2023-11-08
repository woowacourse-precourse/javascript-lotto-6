import LottoTicket from '../Model/LottoTicket.js';
import Interface from '../View/Interface.js';

class LottoMachine {
  #lottoTicket;
  constructor() {
    this.#lottoTicket = LottoTicket.getInstance();
  }

  async createWinningNumber() {
    try {
      const winNums = await Interface.requestWinNums();
      this.saveWinningNumber(winNums);
    } catch (error) {
      await this.winNumsErrorHandler(error);
    }
  }

  saveWinningNumber(winNums) {
    this.#lottoTicket.saveSpecificTypeData('win', winNums);
  }

  async winNumsErrorHandler(error) {
    Printer.printWinNumsErrorMessage(error);
    await this.createWinningNumber();
  }

  async createBonusNumber() {
    try {
      const bonusNum = await Interface.requestBonusNum();
      this.saveBonusNum(bonusNum);
    } catch (error) {
      await this.bonusNumErrorHandler(error);
    }
  }
  
  saveBonusNum(bonusNum) {
    this.#lottoTicket.saveSpecificTypeData('bonus', bonusNum);
  }

  async bonusNumErrorHandler(error) {
    Printer.printBonusNumErrorMessage(error);
    await this.createBonusNumber();
  }
}
export default LottoMachine;
