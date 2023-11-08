import { Console } from '@woowacourse/mission-utils';
import Print from '../../../../src/functinoal/modules/Print';
import Lotto from '../../../../src/Lotto';

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
      '3개를 구매했습니다.',
      '[1, 2, 3, 4, 5, 6]',
      '[7, 8, 9, 10, 11, 12]',
      '[43, 21, 12, 32, 31, 35]',
    ],
  ],
  [
    [new Lotto([2, 4, 6, 8, 10, 14])],
    ['1개를 구매했습니다.', '[2, 4, 6, 8, 10, 14]'],
  ],
];

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
