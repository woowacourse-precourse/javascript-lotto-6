class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers.sort((a, b) => a - b);
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  // TODO: 추가 기능 구현
}

class LottoTicket {
  #lottoTickets = [];

  constructor(purchaseAmount) {
    for (let i = 0; i < purchaseAmount / 1000; i++) {
      const LOTTO_NUMBERS = MissionUtils.Random.pickUniqueNumbersInRange(
        1,
        45,
        6
      );
      this.#lottoTickets.push(new Lotto(LOTTO_NUMBERS));
    }
  }

  getLottoTickets() {
    return this.#lottoTickets;
  }
}

export default Lotto;
