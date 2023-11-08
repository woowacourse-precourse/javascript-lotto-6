import { MissionUtils } from '@woowacourse/mission-utils';
import printEachLotto from '../src/print/printEachLotto';

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
