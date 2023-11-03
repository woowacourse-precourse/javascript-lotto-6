class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  static buyLottoTickets(money) {
    if (money < 1000) {
      throw new Error("[ERROR] 로또는 1000원부터 구입할 수 있습니다.");
    }
    if (money % 1000 !== 0) {
      throw new Error("[ERROR] 구입 금액은 1000원 단위입니다.");
    }
  }
}

export default Lotto;
