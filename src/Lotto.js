import {
  amountType,
  duplicateNum,
  numberCounter,
  numberRange,
} from "./Validation";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    numberCounter(numbers);
    numbers.forEach((v) => amountType(v));
    numbers.forEach((v) => numberRange(v));
    duplicateNum(numbers);
  }

  // TODO: 추가 기능 구현
  #classificRank(count, haveBonusNum) {
    if (count === 6) return [1, 2000000000];
    if (count === 5) return haveBonusNum ? [2, 30000000] : [3, 1500000];
    if (count === 4) return [4, 50000];
    if (count === 3) return [5, 5000];

    return 0;
  }

  #matchNums(game, bonusNum) {
    const matchCount = this.#numbers.filter((v) => game.includes(v)).length;
    const haveBonusNum = game.includes(bonusNum);

    return this.#classificRank(matchCount, haveBonusNum);
  }

  calcResult(games, bonusNum) {
    const result = Array.from(Array(6), () => Array(2).fill(0));

    games.forEach((game) => {
      const [rank, prize] = this.#matchNums(game, bonusNum);
      result[rank][0]++;
      result[rank][1] += prize;
    });

    return result;
  }
}

export default Lotto;
