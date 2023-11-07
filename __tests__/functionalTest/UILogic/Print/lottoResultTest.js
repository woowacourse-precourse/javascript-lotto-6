import { Console } from '@woowacourse/mission-utils';
import Print from '../../../../src/functinoal/modules/Print';

const getLogSpy = () => {
  const logSpy = jest.spyOn(Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

const lottoResultTestInput = [
  [
    [0, 1, 0, 3, 2, 0, 0, 0, 1, 0, 1, 0, 1],
    [
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
