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
      case 4:
        resultList.filter((data) => data.rank === 4 && data.count++);
      case 5:
        if (validateIncludeBonus(prizeList, bonus)) {
          resultList.filter((data) => data.rank === 3 && data.count++);
        } else {
          resultList.filter((data) => data.rank === 2 && data.count++);
        }
      case 6:
        resultList.filter((data) => data.rank === 1 && data.count++);
    }
  }

  getMatchedCount(prizeList) {
    return this.#numbers.filter((number) => prizeList.includes(number)).length;
  }

  validateIncludeBonus(prizeList, bonus) {
    return true;
  }
}

export default Lotto;
