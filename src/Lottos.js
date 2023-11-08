import { Console, Random } from '@woowacourse/mission-utils';
import { checkValue } from './libs/checkValue';
import { AMOUNT, LOTTO, PLACE, PRIZE, WINNING_DETAIL } from './libs/constants';
import Lotto from './Lotto';
import { throwError } from './libs/throwError';

class Lottos {
  constructor(purchaseAmount) {
    this.validate(purchaseAmount);
    //몇장 구매인지 계산
    this.count = purchaseAmount / AMOUNT.UNIT;
    //여러장 발행해야해서
    this.lists = [];
    this.publishLotto();
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
    this.lists.forEach(list => {
      list.printNumbers();
    });
  }

  //당첨번호와 보너스번호를 받아와서 각 로또의 등수 계산하고 등수 목록 반환
  calculateRanks(winningNumbers, bonusNumber) {
    let lottoRanks = [];
    this.lists.forEach(lotto => {
      lottoRanks.push(lotto.calculateRank(winningNumbers, bonusNumber));
    });
    // Console.print(lottoRanks);
    //5등까지만 반환되도록
    return lottoRanks.filter(rank => rank <= PLACE.LAST);
  }

  //당첨 티켓의 개수 계산
  winningTicketCount(lottoRanks, idx) {
    return lottoRanks.filter(rank => rank === 5 - idx).length;
  }

  //당첨내역 출력
  printWinningDetails(lottoRanks) {
    // Console.print(lottoRanks);
    const winningDetails = [
      WINNING_DETAIL.FIFTH,
      WINNING_DETAIL.FOURTH,
      WINNING_DETAIL.THIRD,
      WINNING_DETAIL.SECOND,
      WINNING_DETAIL.FIRST,
    ];
    winningDetails.forEach((winningDetail, idx) => {
      const winningCount = this.winningTicketCount(lottoRanks, idx);

      Console.print(`${winningDetail} - ${winningCount}개`);
    });
  }

  //로또 수익률 계산
  calculateRate(lottoRanks) {
    const lottoPrizes = [
      PRIZE.FIFTH,
      PRIZE.FOURTH,
      PRIZE.THIRD,
      PRIZE.SECOND,
      PRIZE.FIRST,
    ];
    const totalPrize = lottoPrizes.reduce((acc, cur, idx) => {
      const winningCount = this.winningTicketCount(lottoRanks, idx);
      return acc + cur * winningCount;
    }, 0);

    const purchaseAmount = this.count * AMOUNT.UNIT;

    //소수점 반올림
    return ((totalPrize / purchaseAmount) * 100).toFixed(1);
  }

  //수익률 출력
  printRate(lottoRanks) {
    const lottoRate = this.calculateRate(lottoRanks);
    Console.print(`총 수익률은 ${lottoRate}%입니다.`);
  }
}

export default Lottos;
