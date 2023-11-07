import { NUMBER } from './Data.js';

class MatchingLotto {
  constructor(inputNumberList, inputBounsNumber, lottoNumber) {
    this.inputNumberList = inputNumberList;
    this.inputBounsNumber = inputBounsNumber;
    this.lottoNumber = lottoNumber;
  }

  matching() {
    const matchingNumber = Array(this.lottoNumber.length).fill(
      NUMBER.INIT_VALUE,
    );
    const matchingBonus = Array(this.lottoNumber.length).fill(
      NUMBER.INIT_VALUE,
    );
    this.lottoNumber.forEach((items, index) => {
      items.forEach((item) => {
        if (this.inputNumberList.includes(item)) {
          matchingNumber[index] += 1;
        }
      });
      if (items.includes(this.inputBounsNumber)) {
        matchingBonus[index] += 1;
      }
    });
    return [matchingNumber, matchingBonus];
  }
}

export default MatchingLotto;
