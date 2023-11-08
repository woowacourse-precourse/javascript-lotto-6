/* eslint-disable */
import countSameNumbers from '../src/game/countSameNumbers';
import getReturnRate from '../src/game/getReturnRate';
import countWinningLotteries from '../src/game/countWinningLotteries';

describe('로또 로직 테스트', () => {
  test('로또마다 당첨번호를 비교 후, 동일한 번호 갯수를 카운트 하여 배열에 담아 반환한다.', () => {
    expect(
      countSameNumbers(
        [
          [1, 10, 11, 27, 39, 43],
          [5, 8, 15, 27, 30, 43],
          [4, 20, 21, 35, 44, 45],
        ],
        [1, 10, 20, 21, 27, 43, 35],
      ),
    ).toEqual([4, 2, 3]);
  });

  test('당첨 로또를 카운트 하여 [3개, 4개, 5개, 5개&보너스번호, 6개] 형태의 당첨 로또 갯수를 가진 배열을 반환한다.', () => {
    expect(countWinningLotteries([4, 2, 3, 5, 7])).toEqual([1, 1, 1, 0, 1]);
  });

  test('구매 금액을 받아 수익률을 계산하여 반환한다.', () => {
    expect(getReturnRate([2, 1, 0, 0, 1], 200000)).toEqual('1000030.0');
  });
});
