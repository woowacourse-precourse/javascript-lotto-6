class WinningChecker {
  #winning_numbers;
  #bonus_number;

  constructor(winning_numbers, bonus_number) {
    this.#winning_numbers = winning_numbers.map(Number);
    this.#bonus_number = Number(bonus_number);
  }

  #calculateWinningNumberMatchCount(numbers) {
    return this.#winning_numbers.reduce((count, winning_number) => {
      if (numbers.includes(winning_number)) {
        return count + 1;
      }
      return count;
    }, 0);
  }

  #checkBonusNumberMatched(numbers) {
    return numbers.includes(this.#bonus_number);
  }

  getWinningResult(numbers) {
    const winning_number_match_count =
      this.#calculateWinningNumberMatchCount(numbers);
    const bonus_number_matched = this.#checkBonusNumberMatched(numbers);

    if (winning_number_match_count === 6) return "FIRST";
    if (winning_number_match_count === 5 && bonus_number_matched)
      return "SECOND";
    if (winning_number_match_count === 5) return "THIRD";
    if (winning_number_match_count === 4) return "FOURTH";
    if (winning_number_match_count === 3) return "FIFTH";
    return "NONE";
  }
}

export default WinningChecker;
