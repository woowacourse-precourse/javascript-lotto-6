import { Console, Random } from '@woowacourse/mission-utils';
import { checkValue } from './libs/checkValue';
import { AMOUNT, LOTTO, PLACE } from './libs/constants';
import Lotto from './Lotto';

class Lottos {
  constructor(purchaseAmount) {
    this.validate(purchaseAmount);
    //몇장 구매인지 계산
    this.count = purchaseAmount / AMOUNT.UNIT;
    //여러장 발행해야해서
    this.lists = [];
  }

  validate(purchaseAmount) {
    const { errorMessage } = checkValue.purchaseAmount(purchaseAmount);

    if (errorMessage) {
      throwError(errorMessage);
    }
  }

  //랜덤 로또번호 생성
  generateLotto() {
    const lottoNumbers = Random.pickUniqueNumbersInRange(
      LOTTO.MIN_NUMBER,
      LOTTO.MAX_NUMBER,
      LOTTO.NUMBERS_COUNT,
    );

    return new Lotto(lottoNumbers);
  }

  //로또 구매 장수만큼 로또번호 생성
  publishLotto() {
    for (let num = 0; num < this.count; num++) {
      const newLotto = this.generateLotto();
      this.lists.push(newLotto);
    }
  }

  //구매한 로또 수량 출력
  printTicketCount() {
    Console.print(`${this.count}개를 구매했습니다.`);
  }

  //구매한 로또 번호 목록 출력
  printTickets() {
    // Console.print(this.list);
    this.lists.forEach(list => {
      list.printNumbers();
    });
  }
}

export default Lottos;
