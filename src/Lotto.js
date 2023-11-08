class Lotto {
  #numbers;
  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  //유효성검사
  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개 여야 합니다.");
    }

    //로또번호가 1 ~ 45사이의 숫자임을 검사
    for (let i = 0; i < numbers.length; i++) {
      let num = numbers[i];
      if (num < 1 || num > 45) {
        throw new Error("[ERROR] 로또 번호는 1과 45 사이여야 합니다.");
      }
    }

    //로또 번호 중복 방지
    const set = new Set(numbers);
    if (set.size < 6) {
      throw new Error("[ERROR] 숫자가 중복됩니다.");
    }
  }

  //당첨번호(answer)와 생성한 번호(this.#numbers) 비교
  answerCount(answer) {
    let count = 0;
    for (const n of this.#numbers) {
      if (answer.includes(n)) {
        count++;
      }
    }
    return count;
  }

  //보너스 번호(bonus)와 생성한 번호(this.#numbers) 비교
  bonusMatch(bonus) {
    if (this.#numbers.includes(bonus)) {
      return true;
    }
    return false;
  }
}

export default Lotto;
