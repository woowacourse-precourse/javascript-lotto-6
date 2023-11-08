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

  // Generate a random number between 1 and 45
  static GENERATE_RANDOM_NUMBER() {
    return Math.floor(Math.random() * 45) + 1;
  }

  // Generate an array of 6 unique random numbers for a Lotto ticket
  static GENERATE_LOTTO_TICKET() {
    const ticket = new Set();
    while (ticket.size < 6) {
      ticket.add(Lotto.GENERATE_RANDOM_NUMBER());
    }
    return Array.from(ticket);
  }

  // Check how many numbers match between two Lotto tickets
  static CHECK_MATCHING_NUMBERS(ticket1, ticket2) {
    const matchingNumbers = ticket1.filter((number) => ticket2.includes(number));
    return matchingNumbers;
  }

  // Buy a Lotto ticket
  static BUY_LOTTO_TICKET() {
    return new Lotto(Lotto.GENERATE_LOTTO_TICKET());
  }

  // Check how many numbers match with this Lotto instance
  CHECK_TICKET(ticket) {
    if (!(ticket instanceof Lotto)) {
      throw new Error("[ERROR] 유효한 로또 티켓이 아닙니다.");
    }
    return Lotto.CHECK_MATCHING_NUMBERS(this.#numbers, ticket.#numbers);
  }
}

export default Lotto;
