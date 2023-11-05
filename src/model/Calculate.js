class Calculate {
    #numbers;
    #issuedLotto;
    #bonus;
    #isBonus;
    #count;

    constructor(numbers, arrays, bonus) {
        this.#numbers = numbers;
        this.#issuedLotto = arrays;
        this.#bonus = bonus;
        this.result = [];
        this.#isBonus = false;
        this.#count = 0;
    }

    isCheckBonus(lotto) {
      if(this.#issuedLotto[lotto].includes(+this.#bonus)) {
        this.#isBonus = true;
      }
    }

    isCheckCorrectNumber(lotto, number) {
      if(this.#issuedLotto[lotto].includes(+this.#numbers[number])) {
        this.#count += 1
      }
    }

    onPushResult() {
      if(!this.#isBonus && this.#count >= 3) {
        this.result.push(this.#count);
      }
    }

    countNumbers(lotto, number) {
      this.isCheckCorrectNumber(lotto, number);
      if (this.#count === 5) {
        this.isCheckBonus(lotto);
      }
    }

    count() {
      for(let lotto = 0; lotto < this.#issuedLotto.length; lotto++) {
        this.#count = 0;
        this.#isBonus = false;
        for(let number = 0; number < this.#issuedLotto[lotto].length; number++) {
          this.countNumbers(lotto, number);
        }
        if(this.#isBonus && this.#count === 5) {
          this.result.push('bonus');
        }
        this.onPushResult();
      }

      return this.result;
    };
    
    collect() {
      return this.result.reduce((allCount, count) => {
        if(count in allCount) {
          allCount[count] += 1;
        } else {
          allCount[count] = 1;
        }
  
        return allCount;
      }, {});
    }

    // calculateRate(result) {
    //   let sum = 0;
    //   for(const value of Object.keys(result)) {
    //     if(value === '3') {
    //       sum += 5000
    //     }
    //     if(value === '4') {
    //       sum += 50000
    //     }
    //     if(value === '5') {
    //       sum += 1500000
    //     }
    //     if(value === '5.5') {
    //       sum += 30000000
    //     }
    //     if(value === '6') {
    //       sum += 2000000000
    //     }
    //   } 
    //   const rate = ((sum / this.amount) * 100).toFixed(1).toLocaleString();
    //   this.print(result, rate);
    // }
}

export default Calculate;