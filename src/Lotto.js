import UserInput from './view/userInput.js';

class Lotto {
  #numbers;

  constructor(amount, lottoNumbers, numbers, bonus) {
    this.amount = amount;
    this.lottoNumbers = lottoNumbers;
    this.#numbers = numbers;
    this.bonus = bonus;
  };

  calculateResult() {
    let result = [];
    for(let lotto = 0; lotto < this.lottoNumbers.length; lotto++) {
      let count = 0;

      for(let number = 0; number < this.lottoNumbers[lotto].length; number++) {
        if(this.lottoNumbers[lotto].includes(+this.#numbers[number])) {
          count += 1
        }
      }
      if(count >= 3) {
        result.push(count);
      }

    }
    const countedResult = result.reduce((allCount, count) => {
      if(count in allCount) {
        allCount[count] += 1;
      } else {
        allCount[count] = 1;
      }

      return allCount;
    }, {});

    console.log(countedResult);
  };
}

export default Lotto;
