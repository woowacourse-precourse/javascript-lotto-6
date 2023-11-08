import Lotto from '../src/Lotto.js';
import { getLogSpy } from './mockMissionUtils.js';

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
  test('로또 인스턴스가 생성되면 로또 배열을 출력한다.', () => {
    // given
    const logSpy = getLogSpy();
    const numbers = [1, 2, 3, 4, 5, 6];

    // when
    new Lotto(numbers);

    // then
    expect(logSpy).toHaveBeenCalledWith(numbers);
  });

  test('로또 번호를 얻는다.', () => {
    // given
    const numbers = [1, 2, 3, 4, 5, 6];

    // when
    const lotto = new Lotto(numbers);

    // then
    expect(lotto.length).toBe(numbers.length);
    expect(lotto).toEqual(numbers);
  });
});
