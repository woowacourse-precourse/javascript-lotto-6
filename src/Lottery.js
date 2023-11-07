import { Random, Console } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';

// 추후 리팩토링하기
const PAYMENTCOMMENT = '구입금액을 입력해 주세요.\n';
const WINNINGNUMBERSCOMMENT = '\n당첨 번호를 입력해 주세요.\n';
const BONUSNUMBERCOMMENT = '\n보너스 번호를 입력해 주세요.\n';

export default class Lottery {
  #payMoney;

  #winningNumberList;

  #bonusNumer;

  #lottoList;

  #winningCount;

  constructor() {
    this.#payMoney = 0;
    this.#winningNumberList = [];
    this.#bonusNumer = 0;
    this.#lottoList = [];
    this.#winningCount = [0, 0, 0, 0, 0]; // 3,4,5,5+보너스,6개 일치
  }

  commomValidator(inputValue) {
    if (Number.isNaN(inputValue)) throw Error('숫자 형식이 아닙니다.');
    if (!Number.isInteger(inputValue)) throw Error('정수가 아닙니다.');
    if (inputValue <= 0) throw Error('앙의 정수가 아닙니다.');
  }

  #throwInputErrors(trialFunction, inputStep) {
    try {
      trialFunction();
    } catch (error) {
      throw Error(`${inputStep}: ${error.message}`);
    }
  }

  async readPayMoney() {
    this.#payMoney = Number(await Console.readLineAsync(PAYMENTCOMMENT));

    // exception check
    this.#throwInputErrors(() => {
      this.commomValidator(this.#payMoney);
      if (this.#payMoney % 1000 !== 0) throw Error('1000원 단위가 아닙니다.');
    }, 'payMoney');

    // make Lottos.
    this.pay();
  }

  async readWinningNumberList() {
    this.#winningNumberList = (
      await Console.readLineAsync(WINNINGNUMBERSCOMMENT)
    )
      .split(',')
      .map((element) => Number(element));

    // exception check
    this.#throwInputErrors(() => {
      if (this.#winningNumberList.length !== 6)
        throw Error('6개의 번호가 아니거나 ","로 구분하지 않았습니다');

      this.#winningNumberList.forEach((winningNumber) => {
        this.commomValidator(winningNumber);
        if (winningNumber < 1 || winningNumber > 45)
          throw Error('각 번호가 1~45 사이 자연수이지 않습니다.');
      });
    }, 'winningNumberList');
  }

  async readBonusNumber() {
    this.#bonusNumer = Number(await Console.readLineAsync(BONUSNUMBERCOMMENT));
    this.#throwInputErrors(() => {
      this.commomValidator(this.#bonusNumer);
      if (this.#bonusNumer < 1 || this.#bonusNumer > 45)
        throw Error('각 번호가 1~45 사이 자연수이지 않습니다.');
      if (this.#winningNumberList.includes(this.#bonusNumer))
        throw Error('당첨 번호와 중복됩니다.');
    }, 'bonusNumber');
  }

  pay() {
    // TODO
    const numberOfLotto = this.#payMoney / 1000;
    // 발행
    for (let i = 0; i < numberOfLotto; i += 1) {
      this.#lottoList.push(
        new Lotto(Random.pickUniqueNumbersInRange(1, 45, 6)),
      );
    }
    // 발행 출력
    Console.print(`\n${numberOfLotto}개를 구매했습니다.`);
    // 각각 정렬
    this.#lottoList.forEach((lotto) => lotto.sortNumbers());
    // 로또들 출력
    this.#lottoList.forEach((lotto) => lotto.printNumbers());
  }

  matchNumbers() {
    const matchResults = this.#lottoList.map((lotto) =>
      lotto.checkWinning(this.#winningNumberList, this.#bonusNumer),
    );

    matchResults.forEach((eachResult) => {
      if (eachResult.winning - 3 === 3) {
        this.#winningCount[4] += 1;
        return;
      }
      if (eachResult.winning - 3 === 2) {
        if (eachResult.bonus) {
          this.#winningCount[3] += 1;
          return;
        }
        this.#winningCount[2] += 1;
        return;
      }
      if (eachResult.winning - 3 >= 0)
        this.#winningCount[eachResult.winning - 3] += 1;
    });
  }

  printWinnigCount() {
    const outputComments = [
      '3개 일치',
      '4개 일치',
      '5개 일치',
      '5개 일치, 보너스 볼 일치',
      '6개 일치',
    ];
    const prizes = [5000, 50000, 1500000, 30000000, 2000000000];
    const prizesString = prizes.map((eachPrize) => {
      const resultStringParts = [];
      for (let i = 3; i >= 1; i -= 1) {
        const tmp = Math.floor(eachPrize / 1000 ** i);
        if (tmp < 1) continue;
        if (tmp % 1000 > 0) {
          resultStringParts.push(tmp % 1000);
          continue;
        }
        resultStringParts.push('000');
      }
      resultStringParts.push('000');
      return resultStringParts.join(',');
    });

    Console.print('\n당첨 통계');
    Console.print('---');
    this.#winningCount.forEach((eachCount, index) =>
      Console.print(
        `${outputComments[index]} (${prizesString[index]}원) - ${eachCount}개`,
      ),
    );
    const earningRate = (
      Math.round(
        (this.#winningCount
          .map((eachCount, index) => eachCount * prizes[index])
          .reduce((acc, cur) => acc + cur, 0) /
          this.#payMoney) *
          100 *
          10,
      ) / 10
    ).toFixed(1);
    Console.print(`총 수익률은 ${earningRate}%입니다.`);
  }
}
