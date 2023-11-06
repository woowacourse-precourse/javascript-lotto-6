import { GRADE } from '../../src/constants/lotto';
import LottoDrawChecker from '../../src/domains/LottoDrawChecker';

const winningNumbers = [1, 2, 3, 4, 5, 6];
const bonusNumber = 7;
let lottoDrawChecker;

beforeEach(() => {
  lottoDrawChecker = new LottoDrawChecker(winningNumbers, bonusNumber);
});

describe('method : getDrawResult test', () => {
  test('1, 2, 3등의 lotto 목록이 주어졌을때 반환값의 1, 2, 3등이 +1 씩 증가해야한다.', () => {
    // given
    const lottoList = [
      [1, 2, 3, 4, 5, 6],
      [1, 2, 3, 4, 5, 7],
      [1, 2, 3, 4, 5, 45],
    ];

    // when
    const result = lottoDrawChecker.getDrawResult(lottoList);

    // then
    expect(result).toEqual({
      [GRADE.FIRST]: 1,
      [GRADE.SECOND]: 1,
      [GRADE.THIRD]: 1,
      [GRADE.FOURTH]: 0,
      [GRADE.FIFTH]: 0,
    });
  });

  test('3등 2개인 lotto 목록이 주어졌을때 3등만 +2 증가해야한다.', () => {
    // given
    const lottoList = [
      [1, 2, 3, 4, 5, 45],
      [1, 2, 3, 4, 5, 45],
    ];

    // when
    const result = lottoDrawChecker.getDrawResult(lottoList);

    // then
    expect(result).toEqual({
      [GRADE.FIRST]: 0,
      [GRADE.SECOND]: 0,
      [GRADE.THIRD]: 2,
      [GRADE.FOURTH]: 0,
      [GRADE.FIFTH]: 0,
    });
  });

  test('미당첨 lotto 목록이 주어졌을때 당첨내역의 value가 모두 0이여야 한다.', () => {
    // given
    const lottoList = [
      [40, 41, 42, 43, 44, 45],
      [31, 32, 33, 34, 35, 36],
    ];

    // when
    const drawResult = lottoDrawChecker.getDrawResult(lottoList);
    const isQquang = Object.values(drawResult).every(
      (drawGradeCount) => drawGradeCount === 0,
    );

    // then
    expect(isQquang).toEqual(true);
  });
});
