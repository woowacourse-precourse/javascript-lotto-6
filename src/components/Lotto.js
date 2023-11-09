export default class Lotto {
  #numbers;

  constructor(numbers) {
    this.#numbers = numbers;
  }

  matchCount(other) {
    const count = other.filter((number) => this.contains(number)).length;
    return count;
  }

  contains(number) {
    return this.#numbers.includes(number);
  }

  count(result, matchCount, isBonusMatch) {
    if (matchCount >= 3) {
      const key = matchCount === 5 && isBonusMatch ? '5B' : matchCount;
      result[key].count += 1;
    }
    return result;
  }
}
