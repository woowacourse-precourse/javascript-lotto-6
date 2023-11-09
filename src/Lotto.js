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

    if (numbers.length !== new Set(numbers).size) {
      throw new Error("[ERROR] 로또 번호가 중복될 수 없습니다.");
    }
  }

  sortLottoList() {
    return this.#numbers.sort((x, y) => x - y);
  }

  getWinningList(prizeList, resultList, bonus) {
    const countMatch = this.getMatchedCount(prizeList);

    switch (countMatch) {
      case 3:
        resultList.filter((data) => data.rank === 5 && data.count++);
        break;
      case 4:
        resultList.filter((data) => data.rank === 4 && data.count++);
        break;
      case 5:
        this.validateIncludeBonus(prizeList, bonus)
          ? resultList.filter((data) => data.rank === 2 && data.count++)
          : resultList.filter((data) => data.rank === 3 && data.count++);
        break;
      case 6:
        resultList.filter((data) => data.rank === 1 && data.count++);
        break;
    }
    return resultList;
  }

  getMatchedCount(prizeList) {
    return this.#numbers.filter((number) => prizeList.includes(number)).length;
  }

  validateIncludeBonus(prizeList, bonus) {
    let filterList = [];
    this.getMatchedCount(prizeList) &&
      (filterList = this.#numbers.filter(
        (number) => !prizeList.includes(number)
      ));

    return filterList.includes(bonus);
  }
}

export default Lotto;
