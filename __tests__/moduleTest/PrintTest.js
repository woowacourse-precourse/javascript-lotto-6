import { Console } from '@woowacourse/mission-utils';
import Print from '../../src/modules/Print.js';
import Lotto from '../../src/Lotto.js';

const getLogSpy = () => {
  const logSpy = jest.spyOn(Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

const purchasedLottoTestInput = [
  [
    [
      new Lotto([1, 2, 3, 4, 5, 6]),
      new Lotto([7, 8, 9, 10, 11, 12]),
      new Lotto([43, 21, 12, 32, 31, 35]),
    ],
    [
      '',
      '3개를 구매했습니다.',
      '[1, 2, 3, 4, 5, 6]',
      '[7, 8, 9, 10, 11, 12]',
      '[43, 21, 12, 32, 31, 35]',
    ],
  ],
  [
    [new Lotto([2, 4, 6, 8, 10, 14])],
    ['', '1개를 구매했습니다.', '[2, 4, 6, 8, 10, 14]'],
  ],
];
const lottoResultTestInput = [
  [
    [0, 1, 0, 3, 2, 0, 0, 0, 1, 0, 1, 0, 1],
    [
      '',
      '당첨 통계',
      '---',
      '3개 일치 (5,000원) - 0개',
      '4개 일치 (50,000원) - 1개',
      '5개 일치 (1,500,000원) - 1개',
      '5개 일치, 보너스 볼 일치 (30,000,000원) - 0개',
      '6개 일치 (2,000,000,000원) - 1개',
    ],
  ],
  [
    [0, 0, 1, 1, 0, 0, 4, 3, 5, 0, 5, 1, 0],
    [
      '',
      '당첨 통계',
      '---',
      '3개 일치 (5,000원) - 7개',
      '4개 일치 (50,000원) - 5개',
      '5개 일치 (1,500,000원) - 5개',
      '5개 일치, 보너스 볼 일치 (30,000,000원) - 1개',
      '6개 일치 (2,000,000,000원) - 0개',
    ],
  ],
  [
    [5, 5, 5, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0],
    [
      '',
      '당첨 통계',
      '---',
      '3개 일치 (5,000원) - 0개',
      '4개 일치 (50,000원) - 0개',
      '5개 일치 (1,500,000원) - 0개',
      '5개 일치, 보너스 볼 일치 (30,000,000원) - 0개',
      '6개 일치 (2,000,000,000원) - 0개',
    ],
  ],
];
describe('Print 테스트', () => {
  test.each(purchasedLottoTestInput)(
    'purchasedLotto()',
    (input, expectedValue) => {
      //given
      const logSpy = getLogSpy();

      //when
      Print.purchasedLotto(input);

      //then
      logSpy.mock.calls.forEach((call, index) => {
        expect(String(call[0])).toBe(expectedValue[index]);
      });
    }
  );

  test.each(lottoResultTestInput)('lottoResult()', (input, expectedValue) => {
    //given
    const logSpy = getLogSpy();

    //when
    Print.lottoResult(input);

    //then
    logSpy.mock.calls.forEach((call, index) => {
      expect(String(call[0])).toBe(expectedValue[index]);
    });
  });
});
