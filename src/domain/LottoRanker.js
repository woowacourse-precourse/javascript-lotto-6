
class LottoRanker {

  #bonusNumber;

  #lottoArray;

  #luckyArray;

  #rankArray = [];

  
  constructor(lottoArray, luckyBonusArray) {
    this.#lottoArray = lottoArray;
    this.#arranger(luckyBonusArray);
  }

  #ranking() {
    const count = this.countDuplicate(this.#lottoArray, this.#luckyArray);
    const countBonus = this.countDuplicate(this.#lottoArray, [this.#bonusNumber]);

    if (count === 6) this.#rankArray.push(1);

    if (count === 5 && countBonus === 1) {
      this.#rankArray.push(2);
      return;
    } 

    if (count === 5) this.#rankArray.push(3);

    if (count === 4) this.#rankArray.push(4);

    if (count === 3) this.#rankArray.push(5);   
  }

  #arranger(luckyBonusArray) {
    const temp = luckyBonusArray;
    this.#bonusNumber = temp.pop();
    this.#luckyArray = temp;
  }

  output() {
    this.#ranking();
    return this.#rankArray;
  }

  countDuplicate(lottoArray, luckyArray) {
    let setLotto = new Set(lottoArray);
    let setLucky = new Set(luckyArray);
    let setDuplicate = new Set();

    setLotto.forEach((lotto) => {
      if (setLucky.has(lotto)) {
        setDuplicate.add(lotto);
      }
    })

    return setDuplicate.size;
  }
}

const a = new LottoRanker([1,2,3,45,29,44],[1,2,3,45,44,22,23])
console.log(a.output());