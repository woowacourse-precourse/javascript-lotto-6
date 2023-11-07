import LottoTicket from '../Model/LottoTicket.js';
import Interface from '../View/Interface.js';
import Printer from '../View/Printer.js';

class LottoMachine {
  async createWinNum() {
    try {
      const lottoTicket = LottoTicket.getInstance();
      const winNums = await Interface.requestWinNums();
      lottoTicket.saveSpecificTypeData('win', winNums);
    } catch (error) {
      Printer.print('[ERROR]');
      Printer.print(error);
      await this.createWinNum();
    }
  }

  async createBonusNum() {
    try {
      const lottoTicket = LottoTicket.getInstance();
      const bonusNum = await Interface.requestBonusNum();
      lottoTicket.saveSpecificTypeData('bonus', bonusNum);
    } catch (error) {
      Printer.print('[ERROR]');
      Printer.print(error);
      await this.createBonusNum();
    }
  }
}
export default LottoMachine;
