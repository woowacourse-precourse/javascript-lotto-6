import { MissionUtils } from '@woowacourse/mission-utils';
import Lotto from '../src/domain/Lotto.js';
import { outputLottoNummbers } from '../src/view/outputView.js';

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

  // TODO: 이 테스트가 통과할 수 있게 구현 코드 작성
  test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow('[ERROR]');
  });

  // 아래에 추가 테스트 작성 가능
  test('로또 번호가 오름차순으로 정렬된다.', () => {
    const testLotto = new Lotto([6, 5, 4, 2, 3, 1]);
    const logSpy = getLogSpy();

    outputLottoNummbers([testLotto]);

    const ascendingLottoNumber = '[1, 2, 3, 4, 5, 6]';

    expect(() => {
      expect(logSpy).toBe(ascendingLottoNumber);
    });
  });
});
