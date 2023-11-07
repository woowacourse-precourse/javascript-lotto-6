import { Random } from '@woowacourse/mission-utils';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
  }

  // TODO: 추가 기능 구현
  createLotto() {
    const lottoNumberList = [];
    while (lottoNumberList.length < 6) {
      const pick = Random.pickUniqueNumbersInRange(1, 45);
      if (!lottoNumberList.includes(pick)) lottoNumberList.push(pick);
    }
    return lottoNumberList;
  }

  sortAscending(numList) {
    const result = [...numList];
    return result.sort((a, b) => {
      return a - b;
    });
  }

  rateReturn(purchase, revenue) {
    return parseFloat((revenue / purchase) * 100).toFixed(1);
  }

  winningRate(userNumList, winningNumList) {
    const same = userNumList.filter((num) =>
      winningNumList.includes(num),
    ).length;
    return same;
  }
}

export default Lotto;
