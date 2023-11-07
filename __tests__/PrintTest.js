import { MissionUtils } from '@woowacourse/mission-utils';
import printEachLotto from '../src/print/printEachLotto';
import printLottoNumbers from '../src/print/printLottoNumbers';
import printLottoResult from '../src/print/printLottoResult';

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

describe('printEachLotto() 함수 테스트', () => {
  test('로또 번호를 문자열로 출력한다.', () => {
    // Arrange
    const logSpy = getLogSpy();
    const input = [1, 2, 3, 4, 5, 6];
    const output = '[1, 2, 3, 4, 5, 6]';

    // Act
    printEachLotto(input);

    // Assert
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
  });
});

describe('printLottoNumbers() 함수 테스트', () => {
  test('로또 개수와 로또 번호를 출력한다.', () => {
    // Arrange
    const logSpy = getLogSpy();
    const lottoTicketNumber = 2;
    const lottoBox = [
      [1, 2, 3, 4, 5, 6],
      [2, 3, 4, 5, 6, 7],
    ];
    const outputs = ['2개를 구매했습니다', '[1, 2, 3, 4, 5, 6]', '[2, 3, 4, 5, 6, 7]'];

    // Act
    printLottoNumbers(lottoTicketNumber, lottoBox);

    // Assert
    outputs.forEach((output) => expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output)));
  });
});

describe('printLottoResult() 함수 테스트', () => {
  test('로또 결과를 출력한다.', () => {
    // Arrange
    const logSpy = getLogSpy();
    const lottoTicketNumber = 2;
    const ranks = new Map([
      [3, 1],
      [4, 0],
      [5, 0],
      [5.5, 0],
      [6, 0],
    ]);
    const outputs = [
      '\n당첨 통계\n---',
      '3개 일치 (5,000원) - 1개',
      '4개 일치 (50,000원) - 0개',
      '5개 일치 (1,500,000원) - 0개',
      '5개 일치, 보너스 볼 일치 (30,000,000원) - 0개',
      '6개 일치 (2,000,000,000원) - 0개',
      '총 수익률은 250%입니다.',
    ];

    // Act
    printLottoResult(lottoTicketNumber, ranks);

    // Assert
    outputs.forEach((output) => expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output)));
  });
});
