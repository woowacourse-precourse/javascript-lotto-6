import { MissionUtils } from '@woowacourse/mission-utils';
import Lotto from '../src/Lotto.js';
import Random from '../utils/random.js';

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

describe('로또 클래스 테스트', () => {
  test('로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow('[ERROR]');
  });

  // [Finished] TODO: 이 테스트가 통과할 수 있게 구현 코드 작성
  test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    const logSpy = getLogSpy();

    const random = new Random();
    random.validation([6, 2, 3, 4, 5, 6]);

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('[ERROR]'));
  });
  // 아래에 추가 테스트 작성 가능
});
