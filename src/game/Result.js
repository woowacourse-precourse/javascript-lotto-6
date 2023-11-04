class Result {
  #numbers;

  #fitObj;

  //numbers는 구입 금액입니다.
  constructor(numbers, fitObj) {
    this.fitObj = fitObj;
    this.numbers = numbers;
  }

  getRateOfReturn() {
    let revenue = 0;
    console.log(1);
    Object.entries(this.fitObj).forEach(([key, value]) => {
      switch (key) {
        case 'three':
          if (value > 0) {
            console.log(3);
            revenue += 5000 * value;
          }
          break;
        case 'four':
          if (value > 0) {
            revenue += 50000 * value;
          }
          break;
        case 'five':
          if (value > 0) {
            revenue += 1500000 * value;
          }
          break;
        case 'bonus':
          if (value > 0) {
            revenue += 30000000 * value;
          }
          break;
        case 'six':
          if (value > 0) {
            revenue += 2000000000 * value;
          }
          break;
      }
    });
    return revenue / (this.numbers / 100);
  }
}
