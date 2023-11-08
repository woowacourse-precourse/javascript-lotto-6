import LottoTicket from '../Model/LottoTicket.js';

class LottoMachine {
  #lottoTicket;
  constructor() {
    this.#lottoTicket = LottoTicket.getInstance();
  }

  createWinNum(winNums) {
    this.#lottoTicket.saveSpecificTypeData('win', winNums);
  }

  createBonusNum(bonusNum) {
    this.#lottoTicket.saveSpecificTypeData('bonus', bonusNum);
  }
}
export default LottoMachine;
