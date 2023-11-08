class Lotto {
  #numbers;
  #bonusNumber;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers.sort((a, b) => a - b);
  }
  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
    numbers.forEach((number) => {
      if (isNaN(number) || number > 45 || number < 0) {
        throw new Error("[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.");
      }
    });
    if (numbers.length != new Set(numbers).size) {
      throw new Error("[ERROR] 로또 번호는 중복될 수 없습니다.");
    }
  }

  addBonusNumber(number) {
    if (isNaN(number) || number > 45 || number < 0)
      throw new Error("[ERROR] 보너스 번호는 1-45 사이의 숫자여야 합니다.");
    this.#bonusNumber = number;
  }

  checkResult(ticket) {
    let count = 0;
    for (let lottoNumber of ticket) {
      if (this.#numbers.includes(lottoNumber)) count++;
      else if (lottoNumber == this.#bonusNumber) count += 0.5;
    }
    return count;
  }
}

export default Lotto;
