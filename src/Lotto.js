class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    [...numbers].map((v, idx) => {
      if (isNaN(parseInt(v))) throw new Error("[ERROR] 로또 번호는 숫자여야 합니다.");
      if (1 > v || v > 45) throw new Error("[ERROR] 로또 번호는 1~45 사이여야 합니다.");
      if (numbers.indexOf(v) !== idx) throw new Error("[ERROR] 로또 번호는 중복될 수 없습니다");
    })
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  stats(lottoList, bonus) {
    const result = [0, 0, 0, 0, 0];
    lottoList.forEach((lotto) => {
      switch(new Set([...lotto, ...this.#numbers]).size) {
        case(9): result[0]++; break;
        case(8): result[1]++; break;
        case(7): {
          if (lotto.includes(bonus)) result[3]++;
          else result[2]++;
          break;
        }
        case(6): result[4]++; break;
      }
    })
    return result;
  }
}

export default Lotto;
