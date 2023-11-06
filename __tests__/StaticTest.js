/* eslint-disable max-lines-per-function */
import LottoUtill from '../src/utils/LottoUtill.js';

describe('LottoUtill Class 테스트', () => {
  test('당첨 통계 테스트', () => {
    const lottoUtill = new LottoUtill();

    const userNumber = [[1, 2, 3, 4, 5, 6]];
    const winNumber = [1, 2, 3, 4, 5, 6];
    const bonusNumber = 7;

    const staticObject = lottoUtill.checkLottoCorrect(
      userNumber,
      winNumber,
      bonusNumber,
    );
    const expected = { 3: 0, 4: 0, 5: 0, 6: 1, bonus: 0 };
    expect(staticObject).toStrictEqual(expected);
  });

  test('보너스 번호 테스트', () => {
    const lottoUtill = new LottoUtill();

    const userNumber = [[1, 2, 3, 4, 5, 7]];
    const winNumber = [1, 2, 3, 4, 5, 6];
    const bonusNumber = 7;

    const staticObject = lottoUtill.checkLottoCorrect(
      userNumber,
      winNumber,
      bonusNumber,
    );
    const expected = { 3: 0, 4: 0, 5: 0, 6: 0, bonus: 1 };
    expect(staticObject).toStrictEqual(expected);
  });

  test('5등,보너스 당첨 테스트', () => {
    const lottoUtill = new LottoUtill();

    const userNumber = [
      [1, 2, 3, 4, 5, 7],
      [1, 2, 3, 4, 5, 10],
    ];
    const winNumber = [1, 2, 3, 4, 5, 6];
    const bonusNumber = 10;

    const staticObject = lottoUtill.checkLottoCorrect(
      userNumber,
      winNumber,
      bonusNumber,
    );

    const expected = { 3: 0, 4: 0, 5: 1, 6: 0, bonus: 1 };
    expect(staticObject).toStrictEqual(expected);
  });

  // eslint-disable-next-line max-lines-per-function
  test('수익률 테스트', () => {
    const lottoUtill = new LottoUtill();

    const userMoney = 1000;
    const userNumber = [[1, 2, 3, 4, 5, 6]];
    const winNumber = [1, 2, 3, 19, 22, 23];
    const bonusNumber = 45;

    const staticObject = lottoUtill.checkLottoCorrect(
      userNumber,
      winNumber,
      bonusNumber,
    );
    // 실행 부
    const rateUtill = new LottoUtill(userMoney, staticObject);
    expect(rateUtill.getRate()).toBe(500);
  });
});
