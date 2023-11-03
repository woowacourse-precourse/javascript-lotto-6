
class LottoRankMaker {
  #lottoTicket = [];

  #luckyArray = [];

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
    const count = lottoArray
    .filter((number) => luckyArray.includes(number))
    .length;

    return count;
  }

  #rankUpdate() {
    this.#lottoTicket.forEach((lottoArray) => {
      const rank = this.#rankFilter(lottoArray);
      
      if(rank !== 0) {
        this.#rankArray.push(this.#rankFilter(lottoArray));
      }   
    })
  }

  #rankFilter(lottoArray) {
    const luckyCount = this.#countDuplicate(lottoArray, this.#luckyArray);
    const bonusCount = this.#countDuplicate(lottoArray, [this.#bonusNumber]);
    if (luckyCount < 3) return 0;

    if (luckyCount === 6) return 1;

    if (luckyCount === 5 && bonusCount === 1) return 2;

    if (luckyCount === 5) return 3;

    if (luckyCount === 4) return 4;

    if (luckyCount === 3) return 5;
  }
  
  getRankArray() {
    this.#rankUpdate();

    return this.#rankArray;
  }
}

export default LottoRankMaker;

/*
const ticket = [
  [1,2,3,4,5,6],
  [1,2,3,4,5,6],
  [1,2,3,4,5,6],
  [1,2,3,4,5,6]
]

const answer = [5,4,3,11,12,34]

const a = new LottoRankMaker(ticket,answer);

console.log(a.getResult());*/

