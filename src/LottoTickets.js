import { Random } from './Constant';

class LottoTickets {
  #tickets;

  constructor(count) {
    this.#tickets = this.setTickets(count);
  }

  setTickets(count) {
    const newArr = [];

    for (let i = 0; i < count; i++) {
      const list = this.getRandomNumber();
      newArr.push(list);
    }

    return newArr;
  }

  getRandomNumber() {
    const randomList = Random.pickUniqueNumbersInRange(1, 45, 6);
    const sortList = this.sortRandomNumber(randomList);
    return sortList;
  }

  sortRandomNumber(randomList) {
    return randomList.sort((a, b) => a - b);
  }

  get tickets() {
    return this.#tickets;
  }
}

export default LottoTickets;
