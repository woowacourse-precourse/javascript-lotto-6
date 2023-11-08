import InputView from './views/InputView';
import ResultAnalyzer from './models/ResultAnalyzer';

class Lotto {
  #numbers;

  #bonusNumber;

  #resultAnalizer;

  #ticketList;

  constructor(numbers, ticketList) {
    this.#validate(numbers);
    this.#numbers = numbers;
    this.#ticketList = ticketList;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
    this.makeBonusNumber();
  }

  makeBonusNumber() {
    const bonusNumber = InputView.InputBonusNumber();
    this.confirmNumber(bonusNumber);
  }

  confirmNumber(bonusNumber) {
    if (bonusNumber < 1 || bonusNumber > 45) {
      throw new Error('[ERROR] 로또 번호는 1에서 45 사이 숫자만 가능합니다.');
    }
    this.#bonusNumber = bonusNumber;
    this.noticeNumber();
  }

  noticeNumber() {
    this.#resultAnalizer = new ResultAnalyzer();
    this.#resultAnalizer(this.#numbers, this.#bonusNumber, this.#ticketList);
    this.getResult();
  }

  getResult() {
    const result = this.#resultAnalizer.getResult();
    return result;
  }
}

export default Lotto;

// 여기서 셀러한테 보냈다가
// 셀러가 해당 정보들로 결과 판별 머신에 넣어서
// 결과 보여주는 느낌으로 가야할듯
