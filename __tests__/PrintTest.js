import { MissionUtils } from '@woowacourse/mission-utils';
import printEachLotto from '../src/print/printEachLotto';
import printLottoNumbers from '../src/print/printLottoNumbers';

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
