import { LOTTO_RANK } from "../constants/BusinessNumber.js";

class LottoRankMaker {
  #lottoTicket;

  #luckyArray;

  #bonusNumber;

  #rankArray = [];

  constructor(lottoTicket, luckyBonusArray) {
    this.#lottoTicket = lottoTicket;
    this.#seperateBonus(luckyBonusArray);
  }

  #seperateBonus(luckyBonusArray) {
    const temp = luckyBonusArray;
    this.#bonusNumber = temp.pop();
    this.#luckyArray = temp;
  }

  #countDuplicate(lottoArray, luckyArray) {
    const count = lottoArray.filter((number) => luckyArray.includes(number)).length;

    return count;
  }

  #rankUpdate() {
    this.#lottoTicket.forEach((lottoArray) => {
      const rank = this.#rankFilter(lottoArray);
      
      if (rank) {
        this.#rankArray.push(this.#rankFilter(lottoArray));
      }   
    });
  }

  #rankFilter(lottoArray) {
    const luckyCount = this.#countDuplicate(lottoArray, this.#luckyArray);
    const bonusCount = this.#countDuplicate(lottoArray, [this.#bonusNumber]);
    if (luckyCount < 3) return false

    if (luckyCount === 6) return LOTTO_RANK.theFirst;

    if (luckyCount === 5 && bonusCount === 1) return LOTTO_RANK.theSecond;

    if (luckyCount === 5) return LOTTO_RANK.theThird;

    if (luckyCount === 4) return LOTTO_RANK.theFourth;

    if (luckyCount === 3) return LOTTO_RANK.theFifth;
  }
  
  getRankArray() {
    this.#rankUpdate();

    return this.#rankArray;
  }
}

export default LottoRankMaker;
